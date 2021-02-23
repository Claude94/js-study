var styles = ['jazz', 'blues'];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles.shift());
console.log(styles);
styles.shift('jazz');
console.log(styles);
styles.unshift('Rap','Reggae');
console.log(styles);