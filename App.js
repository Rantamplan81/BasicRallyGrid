Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here

        //API Docs: https://help.rallydev.com/apps/2.1/doc/
		console.log("Es mi primerito día");
		this._loadData();
		console.log("Workspace ", this.getContext().getWorkspace());
	},
	
	_loadData: function() {
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, data, success) {
					console.log("Hacemos cosas", myStore, data, success);
					this._loadGrid(myStore);
				},
				scope: this
			},
			fetch: ['FormattedID','Name', 'Owner','ScheduleState']
		});
	},
	
	_loadGrid: function(store) {
		var myGrid = Ext.create('Ext.Container', {
			 items: [{
				 xtype: 'rallygrid',
				 store:store,
				 columnCfgs: [
					 'FormattedID',
					 'Name',
					 'ScheduleState'
				 ]
			 }]
		 });
		 console.log('Grid',myGrid);
		 this.add(myGrid);
	}
});
