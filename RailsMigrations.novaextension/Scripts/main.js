const RailsMigrations = require( "./rails-migrations" );

const railsMigrations = new RailsMigrations;

exports.activate = function() {
    // Do work when the extension is activated

}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("rails-migrations.openLatestMigration", (workspace) => {
    railsMigrations.openLatestMigration();
});


nova.commands.register("rails-migrations.listMigrations", (workspace) => {
    railsMigrations.listMigrations();
});