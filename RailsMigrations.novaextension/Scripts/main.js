const RailsMigrations = require( "./rails-migrations" );

exports.activate = function() {
    // Do work when the extension is activated

}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("rails-migrations.openLatestMigration", (workspace) => {
    const railsMigrations = new RailsMigrations;
    railsMigrations.openLatestMigration();
});


nova.commands.register("rails-migrations.listMigrations", (workspace) => {
    const railsMigrations = new RailsMigrations;
    railsMigrations.listMigrations();
});