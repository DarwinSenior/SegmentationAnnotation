/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('x-video-tab')
class XVideoTab extends polymer.Base {
    @property({ type: String })
    hitId: String;

    @property({ type: Number })
    frameHeight: number;

    @property({ type: Number })
    frameWidth: number;


    @computed({ type: String })
    videourl(hitId) {
	return `/resources/seg${hitId}/seg_res.mp4`
    }
}
XVideoTab.register();
