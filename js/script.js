// navbar
{$(function () {
    $(".shy-header").shyheader({
        classname: "is-watching",
        container: 'shy-container'
    });
});
!function(e,t,n,i){"use strict";e.shyheader=function(i,o){var s=this;s.$el=e(i),s.el=i,s.$el.data("shyheader",s);var a=!1,c=0,l=0,r=0,h=5,d=0,f="";s.initialize=function(){s.options=e.extend({},e.shyheader.defaultOptions,o),d=s.$el.outerHeight(!0),"undefined"!==s.options.container&&(f=e("."+s.options.container),f.css("padding-top",d+"px"),s.options.offsetContentFlag=!0),t.addEventListener("scroll",s.triggerScroll,!1)},s.triggerScroll=function(){a=!0,c=n.body.scrollTop||t.pageYOffset,s.checkScrollPosition()},s.checkScrollPosition=function(){s.options.offsetContentFlag?c>=d&&s.watch():s.watch()},s.watch=function(){a&&(s.getDirection(),a=!1)},s.getDirection=function(){r=c,Math.abs(l-r)<=h||(r>l?s.$el.addClass(s.options.classname):r+e(t).height()<e(n).height()&&s.$el.removeClass(s.options.classname),l=r)},s.initialize()},e.shyheader.defaultOptions={classname:"is-watching",container:"undefined",offsetContentFlag:!1},e.fn.shyheader=function(t){return this.each(function(){new e.shyheader(this,t)})}}(jQuery,window,document);
}
