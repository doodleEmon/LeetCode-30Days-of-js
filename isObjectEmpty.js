var isEmpty = function(obj) {
     if(Array.isArray(obj)) {
         if(obj.length !== 0) {
             return false;
         } else {
             return true;
         }
     } else {
         if(Object.keys(obj).length === 0) {
             return true;
         } else {
             return false;
         }
     }
};
