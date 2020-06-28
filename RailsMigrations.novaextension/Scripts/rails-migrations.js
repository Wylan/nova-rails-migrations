class RailsMigrations {
    openLatestMigration() {
        this.maybeShowMigrations((migrations) => {
            const migration = migrations[0]
            this.openMigration(migration);
        })
    }

    listMigrations() {
        this.maybeShowMigrations((migrations) => {
            nova.workspace.showChoicePalette(migrations, {placeholder: "Choose Migration"}, this.openMigration.bind(this))
        })
    }
    
    maybeShowMigrations(callbackAction) {
        if (this.migrationsFolderExists) {
            const migrations = this.migrationsList
            if (migrations?.length > 0) {
                callbackAction(migrations)
            } else {
                this.showError("No files found in the migrations folder.");
            }
        } else {
            this.showError("Couldn't find the migrations folder. Does the workspace contain a Rails project?");
        }
    }

    openMigration(name) {
        nova.workspace.openFile(nova.path.join(this.migrationsPath, name));
    }

    showError(msg) {
        nova.workspace.showErrorMessage(msg);
    }

    get migrationsList() {
      return nova.fs.listdir(this.migrationsPath).filter((fileName) => fileName.endsWith('.rb')).sort().reverse();
    }

    get migrationsFolderExists() {
      return nova.fs.stat(this.migrationsPath)?.isDirectory();
    }

    get migrationsPath() {
      return nova.path.join(nova.workspace.path, 'db', 'migrate');
    }
}

module.exports = RailsMigrations;