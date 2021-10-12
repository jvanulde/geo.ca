class CGPToggleWidgetHandlerClass extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{button:".elementor-toggle-btn",content:".elementor-toggle-content"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$button:this.$element.find(e.button),$content:this.$element.find(e.content)}}bindEvents(){this.elements.$button.on("click",this.onButtonClick.bind(this))}onButtonClick(e){e.preventDefault();const t=document.querySelector("#"+e.currentTarget.getAttribute("aria-controls"));e.currentTarget.setAttribute("aria-expanded","false"===e.currentTarget.getAttribute("aria-expanded")?"true":"false"),"true"===e.currentTarget.getAttribute("aria-expanded")?(e.currentTarget.classList.add("elementor-active"),jQuery(t).slideDown(400)):(e.currentTarget.classList.remove("elementor-active"),jQuery(t).slideUp(400))}}jQuery(window).on("elementor/frontend/init",(()=>{elementorFrontend.hooks.addAction("frontend/element_ready/cgp-toggle.default",(e=>{elementorFrontend.elementsHandler.addHandler(CGPToggleWidgetHandlerClass,{$element:e})}))}));
//# sourceMappingURL=cgp-toggle-min.js.map