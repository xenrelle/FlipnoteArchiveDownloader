// ==UserScript==
// @name        Flipnote Archive Downloader
// @namespace   https://github.com/xenrelle/
// @match       https://archive.sudomemo.net/watch/*
// @grant       GM_addStyle
// @version     1.0
// @author      xenona
// @description Allows you to download the KWZ Flipnote Studio 3D file from the archive.
// ==/UserScript==

window.addEventListener('load', () => {
	addButton()
})

GM_addStyle(`
	.kwzButton dd {
		color: var(--color-green-deepest);
		font-weight: 700;
	}

	.ShareIcon.ShareIcon--hatena {
		background: var(--color-green)
	}
`);

function addButton() {
	var layout = document.querySelector(`.Layout__main`);
	var kwzButton = document.createElement('span');
	kwzButton.classList.add("ShareIcon")
	kwzButton.classList.add("ShareIcon--hatena")
	kwzButton.classList.add("kwzButton")
	kwzButton.innerHTML = "<dd>Download KWZ</dd>"
	kwzButton.onclick = downloadKWZ
	layout.appendChild(kwzButton);
}

function downloadKWZ() {
	var player = document.querySelector(`.WatchPlayer__player`);
	window.location.href = `https://archive.sudomemo.net${player.getAttribute("src")}`;
}
