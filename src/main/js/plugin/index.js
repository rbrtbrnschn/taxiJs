import Plugin from "./Plugin";

class PluginFactory {
  constructor() {
    this.modules = {};
  }

  /**
   * Registers plugin in given location.
   * @param {Object} metadata 
   * @param {() =>} functionality 
   * @param {String} location 
   */
  register(module) {
    const trigger = module.trigger;
    if(!this.modules[trigger]){
      this.modules[trigger] = [];
    }

    this.modules[trigger].push(module);
  }

  /**
   * 
   * @param {String} pluginEventName 
   * @param {Taxi} taxiJs 
   * @param {Event} e 
   */
  handle(eventName, taxiJs, e){
    if(!this.modules[eventName]) return;
    try {
      this.modules[eventName].forEach((p) => p.handleAction(taxiJs, e));    
    }catch(err) {
      console.error("Module failed.")
    }
  }
}

export default new PluginFactory();