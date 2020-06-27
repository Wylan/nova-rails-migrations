class RailsMigrations {
    openLatestMigration() {
        if (this.migrationsFolderExists) {
            this.openMigration(this.migrationsList[0]);
        } else {
            this.showError("Couldn't find the migrations folder. Are you sure the workspace contains a Rails project?");
        }
    }

    listMigrations() {
        if (this.migrationsFolderExists) {
            nova.workspace.showChoicePalette(this.migrationsList, {placeholder: "Choose Migration"}, this.openMigration.bind(this))
        } else {
            this.showError("Couldn't find the migrations folder. Are you sure the workspace contains a Rails project?");
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