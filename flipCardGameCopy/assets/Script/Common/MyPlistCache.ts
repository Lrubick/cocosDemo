const { ccclass, property } = cc._decorator;
@ccclass
export default class MyPlistCache extends cc.Component {

    addPlistCache(plistName, spriteAtlas) {
        this.plistCache = this.plistCache ? this.plistCache : {};
        this.plistCache[plistName] = spriteAtlas;
    }
    getPlistCache(plistName) {
        this.plistCache = this.plistCache ? this.plistCache : {};
        return this.plistCache[plistName];
    }

    removePlistCache(plistName) {
        if (this.plistCache && this.plistCache[plistName]) {
            delete this.plistCache[plistName];
        }
    }


    clearPlistCache() {
        if (this.plistCache) {
            for (var plist in this.plistCache) {
                cc.loader.releaseRes("Plist/" + plist, cc.SpriteAtlas);
            }
            this.plistCache = null;
        }
    }

}
