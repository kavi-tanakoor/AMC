define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/text!./MyWidget.html",
        "alfresco/core/Core"], function(declare, _Widget, _Templated, template, Core) {
   return declare([_Widget, _Templated, Core], {
      cssRequirements: [{cssFile:"./MyWidget.css",mediaType:"screen"}],
      i18nScope: "BlogExamples",
      i18nRequirements: [{i18nFile: "./MyWidget.properties"}],
      templateString: template,
      buildRendering: function alfresco_MyWidget__buildRendering() {
    	  
    	  this.alfLog("log", "Seedim Logging from my own widget"); 
    	  
         this.greeting = this.message("greeting.label");
         this.inherited(arguments);
      }
   });
});