cc.Class({
    extends: cc.Component,

    properties: { 
        
    },

    addPlistCache: function(plistName, spriteAtlas)
    {   
        this.plistCache = this.plistCache ? this.plistCache  : {};
        this.plistCache[plistName] = spriteAtlas;
    },

    getPlistCache: function(plistName)
    {   
        this.plistCache = this.plistCache ? this.plistCache  : {};
        return  this.plistCache[plistName];
    },

    removePlistCache: function(plistName)
    {   
        if(this.plistCache && this.plistCache[plistName]){
            delete this.plistCache[plistName];
        } 
    },


    clearPlistCache: function()
    {
        if(this.plistCache)
        {
            for(var plist in this.plistCache)
            {   
                cc.loader.releaseRes("Plist/" + plist, cc.SpriteAtlas);
            }
            this.plistCache = null;
        }
    },
 
});
