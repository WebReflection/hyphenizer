function hyphenizer(s,c){return s.replace(/([A-Z])([A-Z][a-z])/g,c='$1'+(c||'-')+'$2').replace(/([a-z])([A-Z])/g,c).toLowerCase()}
export default hyphenizer;
