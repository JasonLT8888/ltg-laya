export default class ResUrl {
    public static build_url(iconName: string) {
        return ResUrl.getDomain() + "res/url/build/" + iconName + ".png";
    }

    public static assist_url(iconName: string) {
        return ResUrl.getDomain() + "res/url/assist/" + iconName + ".png";
    }

    public static music_url(name: string) {
        return ResUrl.getDomain() + "res/url/music/" + name + ".mp3";
    }

    public static sound_url(name: string) {
        return ResUrl.getDomain() + "res/url/sound/" + name + ".mp3";
    }

    public static mesIcon_url(name: string) {
        return ResUrl.getDomain() + "res/url/mesIcon/" + name + ".png";
    }

    public static fieldIcon_url(name: string) {
        return ResUrl.getDomain() + "res/url/field/" + name + ".png";
    }

    public static skillIcon_url(name: string) {
        return ResUrl.getDomain() + "res/url/skill/" + name + ".png";
    }

    public static getDomain(): string {
        return "";
    }
}