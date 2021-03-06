export default {
  tableFields: [
    {
      name: 'state',
      title: 'state',
      callback: 'getEquivalentState'
    },
    {
      name: 'alias',
      title: 'alias',
    },
    {
      name: 'address',
      title: 'address'
    },
    {
      name: 'port',
      title: 'port'
    },
    {
      name: 'runningInstances',
      title: 'running instances'
    },
    {
      name: 'performance.level',
      title: 'performance'
    },
    {
      name: 'resource.cpu',
      title: 'cpu being used',
      sortField: 'resource.cpu',
      callback: 'normalizeResource'
    },
    {
      name: 'resource.memory',
      title: 'memory being used',
      sortField: 'resource.memory',
      callback: 'normalizeResource'
    },
    {
      name: '__component:slave-custom-actions',
      title: 'commands',
      titleClass: 'text-center',
      dataClass: 'text-center'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
