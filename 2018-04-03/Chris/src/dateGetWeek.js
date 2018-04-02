(function () {
  Date.prototype.getWeek = function() {
    var jan4th = new Date(this.getFullYear(),0,4);
    return Math.ceil((((this - jan4th) / 86400000) + jan4th.getDay()+1)/7);
  }
})();
