let spinx = {
    version: "v202412150959",
    isDevelopment: !1,
    campaign: null,
    theme: null,
    currentCampaign: void 0,
    customScripts: {
        onShowOpener: eval(""),
        onHideOpener: eval(""),
        onShowAnnouncement: eval(""),
        onHideAnnouncement: eval("")
    },
    customStyles: ""
};

function combineSpinXWheelData(t, o) {
    var e = t.config?.wheel || {};
    let i = (t, e) => e < t ? e : i(t, e - t);
    return {
        fontFamily: e.fontFamily?.customized && e.fontFamily.value ? e.fontFamily.value : o?.fontFamily,
        contentSize: e.contentSize?.customized && e.contentSize.value ? e.contentSize.value : o?.contentSize,
        borderAround: {
            type: e.borderAround?.customized && e.borderAround.type ? e.borderAround.type : o?.borderAround?.type,
            color: e.borderAround?.customized && e.borderAround.color ? e.borderAround.color : o?.borderAround?.color
        },
        prizeBorder: {
            displayed: e.prizeBorder?.customized ? e.prizeBorder.displayed : o?.prizeBorder?.displayed,
            color: e.prizeBorder?.customized && e.prizeBorder.color ? e.prizeBorder.color : o?.prizeBorder?.color
        },
        circleCenter: {
            displayed: e.circleCenter?.customized ? e.circleCenter.displayed : o?.circleCenter?.displayed,
            borderType: e.circleCenter?.customized && e.circleCenter.borderType ? e.circleCenter.borderType : o?.circleCenter?.borderType,
            borderColor: e.circleCenter?.customized && e.circleCenter.borderColor ? e.circleCenter.borderColor : o?.circleCenter?.borderColor,
            backgroundColor: e.circleCenter?.customized && e.circleCenter.backgroundColor ? e.circleCenter.backgroundColor : o?.circleCenter?.backgroundColor,
            icon: e.circleCenter?.customized && e.circleCenter.icon ? e.circleCenter.icon : o?.circleCenter?.icon
        },
        sticker: {
            borderType: e.sticker?.customized && e.sticker.borderType ? e.sticker.borderType : o?.sticker?.borderType,
            borderColor: e.sticker?.customized && e.sticker.borderColor ? e.sticker.borderColor : o?.sticker?.borderColor,
            backgroundColor: e.sticker?.customized && e.sticker.backgroundColor ? e.sticker.backgroundColor : o?.sticker?.backgroundColor
        },
        playingMusic: e.playingMusic,
        prizes: t.prizes?.map((t, e) => {
            var n = t.config || {}, e = o.prizes?.length ? o.prizes[i(o.prizes.length, e)] : null;
            return {
                id: t.id,
                name: t.name,
                type: t.type,
                status: t.status,
                order: t.order,
                config: {
                    discount: n.discount,
                    freeShipping: n.freeShipping,
                    contentSize: n.contentSize?.customized && n.contentSize.value ? n.contentSize.value : e?.contentSize,
                    contentColor: n.contentColor?.customized && n.contentColor.value ? n.contentColor.value : e?.contentColor,
                    backgroundColor: n.backgroundColor?.customized && n.backgroundColor.value ? n.backgroundColor.value : e?.backgroundColor,
                    effectMusic: n.effectMusic
                }
            };
        })
    };
}

function combineSpinXFormLoginRequiredData(t, e) {
    t = t.config?.formLoginRequired || {};
    return {
        showLogo: t.showLogo,
        fontFamily: t.fontFamily?.customized && t.fontFamily.value ? t.fontFamily.value : e?.fontFamily,
        title: t.title?.customized && t.title.value ? t.title.value : e?.title,
        titleSize: t.titleSize?.customized && t.titleSize.value ? t.titleSize.value : e?.titleSize,
        titleColor: t.titleColor?.customized && t.titleColor.value ? t.titleColor.value : e?.titleColor,
        subTitle: t.subTitle?.customized && t.subTitle.value ? t.subTitle.value : e?.subTitle,
        subTitleSize: t.subTitleSize?.customized && t.subTitleSize.value ? t.subTitleSize.value : e?.subTitleSize,
        subTitleColor: t.subTitleColor?.customized && t.subTitleColor.value ? t.subTitleColor.value : e?.subTitleColor,
        content: t.content?.customized && t.content.value ? t.content.value : e?.content,
        contentSize: t.contentSize?.customized && t.contentSize.value ? t.contentSize.value : e?.contentSize,
        contentColor: t.contentColor?.customized && t.contentColor.value ? t.contentColor.value : e?.contentColor,
        spinButtonContent: t.spinButtonContent?.customized && t.spinButtonContent.value ? t.spinButtonContent.value : e?.spinButtonContent,
        spinButtonContentSize: t.spinButtonContentSize?.customized && t.spinButtonContentSize.value ? t.spinButtonContentSize.value : e?.spinButtonContentSize,
        spinButtonContentColor: t.spinButtonContentColor?.customized && t.spinButtonContentColor.value ? t.spinButtonContentColor.value : e?.spinButtonContentColor,
        spinButtonBackgroundColor: t.spinButtonBackgroundColor?.customized && t.spinButtonBackgroundColor.value ? t.spinButtonBackgroundColor.value : e?.spinButtonBackgroundColor,
        styleContent: t.styleContent?.customized && t.styleContent.value ? t.styleContent.value : ""
    };
}

function combineSpinXPopupData(t, e) {
    t = t.config?.popup || {};
    return {
        displayType: t.displayType,
        background: {
            backgroundColor: t.background?.customized && t.background.backgroundColor ? t.background.backgroundColor : e?.background?.backgroundColor,
            backgroundImage: t.background?.customized && t.background.backgroundImage?.url ? t.background.backgroundImage.url : e?.background?.backgroundImage,
            mobileBackgroundImage: t.background?.customized && t.background.mobileBackgroundImage?.url ? t.background.mobileBackgroundImage.url : e?.background?.mobileBackgroundImage
        },
        backgroundMusic: t.backgroundMusic
    };
}

function combineSpinXOpenerData(t, e, n) {
    var o = (t.config || {}).triggers.spinWheelOpener;
    return {
        content: o.content?.customized && o.content.value ? o.content.value : e?.content,
        position: o.position,
        distance: {
            bottom: o.distance?.bottom?.customized && o.distance?.bottom?.value ? o.distance?.bottom?.value : e?.distance?.bottom,
            left: o.distance?.left?.customized && o.distance?.left?.value ? o.distance?.left?.value : e?.distance?.left,
            right: o.distance?.right?.customized && o.distance?.right?.value ? o.distance?.right?.value : e?.distance?.right
        },
        contentColor: o.contentColor?.customized && o.contentColor.value ? o.contentColor.value : e?.contentColor,
        backgroundColor: o.backgroundColor?.customized && o.backgroundColor.value ? o.backgroundColor.value : e?.backgroundColor,
        openerIcon: `${n?.spinxSharePath}/assets/images/opener/${t.config?.theme}.png`,
        attentionEffect: o.attentionEffect
    };
}

function combineSpinXAnnouncementData(t, e, n) {
    var o = (t.config || {}).announcements, i = {
        ...o.upcomingEvent || {},
        content: o.upcomingEvent?.content || e?.upcomingEvent?.content
    }, a = {
        ...o.readyToSpin || {},
        content: o.readyToSpin?.content || e?.readyToSpin?.content
    }, s = {
        ...o.useWinningPrizes || {},
        content: o.useWinningPrizes?.content || e?.useWinningPrizes?.content
    }, r = {
        ...o.getSpinByOrdering || {},
        content: o.getSpinByOrdering?.content || e?.getSpinByOrdering?.content,
        orderAmountRestriction: {
            content: o.getSpinByOrdering?.orderAmountRestriction?.content || e?.getSpinByOrdering?.orderAmountRestriction?.content
        }
    }, c = {
        ...o.readyToSpinAgain || {},
        content: o.readyToSpinAgain?.content || e?.readyToSpinAgain?.content
    }, d = {
        ...o.countDownToLaunch || {},
        content: o.countDownToLaunch?.content || e?.countDownToLaunch?.content
    }, l = {
        ...o.countDownToClose || {},
        content: o.countDownToClose?.content || e?.countDownToClose?.content
    };
    return {
        status: t.status,
        scheduledAt: t.scheduledAt && "string" == typeof t.scheduledAt ? new Date(t.scheduledAt) : t.scheduledAt,
        launchedAt: t.launchedAt && "string" == typeof t.launchedAt ? new Date(t.launchedAt) : t.launchedAt,
        closedAt: t.closedAt && "string" == typeof t.closedAt ? new Date(t.closedAt) : t.closedAt,
        position: o.position,
        displayType: o.displayType,
        fontFamily: o.fontFamily?.customized && o.fontFamily.value ? o.fontFamily.value : e?.fontFamily,
        contentSize: o.contentSize?.customized && o.contentSize.value ? o.contentSize.value : e?.contentSize,
        contentColor: o.contentColor?.customized && o.contentColor.value ? o.contentColor.value : e?.contentColor,
        backgroundColor: o.backgroundColor?.customized && o.backgroundColor.value ? o.backgroundColor.value : e?.backgroundColor,
        openerIcon: `${n?.spinxSharePath}/assets/images/opener/${t.config?.theme}.png`,
        upcomingEvent: i,
        readyToSpin: a,
        useWinningPrizes: s,
        getSpinByOrdering: r,
        readyToSpinAgain: c,
        countDownToLaunch: d,
        countDownToClose: l
    };
}

function initSpinXWheel(t, e, n) {
    var o = document.createElement("spinx-wheel");
    return o.dataset.json = JSON.stringify(t), "function" == typeof e && o.addEventListener("onStartSpin", e), 
    "function" == typeof n && o.addEventListener("onEndSpin", n), o;
}

function initSpinXForm(t, e) {
    var n = document.createElement("spinx-form");
    return n.dataset.json = JSON.stringify(t), "function" == typeof e && n.addEventListener("onSpin", e), 
    n;
}

function initSpinXPopup(t, e) {
    let n = document.createElement("spinx-popup");
    return n.dataset.json = JSON.stringify(t), "function" == typeof e && n.addEventListener("onLoadedPopup", () => e(n)), 
    document.body.append(n), n;
}

function removeSpinXPopup() {
    document.querySelector("spinx-popup")?.remove();
}

function initSpinXOpener(t, e) {
    var n = document.createElement("spinx-opener");
    return n.dataset.json = JSON.stringify(t), "function" == typeof e && n.addEventListener("onClickOpener", e), 
    document.body.append(n), n;
}

function removeSpinXOpener() {
    document.querySelector("spinx-opener")?.remove();
}

function initSpinXAnnouncement(t) {
    var e = document.createElement("spinx-announcement");
    return e.dataset.json = JSON.stringify(t), "top" === t.position ? document.body.insertBefore(e, document.body.firstChild) : document.body.append(e), 
    e;
}

function removeSpinXAnnouncement() {
    document.querySelector("spinx-announcement")?.remove();
}

function readSpinXJson(t) {
    return fetch(t).then(t => {
        if (t.ok) return t.json();
        throw new Error("HTTP error " + t.status);
    }).catch(function() {
        this.dataError = !0;
    });
}

function convertSpinXCurrency(t, e = "USD", n) {
    return t.toLocaleString(n?.locales, {
        style: "currency",
        currency: e,
        currencyDisplay: n?.currencyDisplay
    });
}

function formatSpinXDateTime(t) {
    return "[object Date]" !== Object.prototype.toString.call(t) ? "NaD" : dayjs(t).format("DD/MM/YYYY HH:mm");
}

function lessThanSpinXHours(t, e, n) {
    return 0 < t.getTime() - e.getTime() && (t.getTime() - e.getTime()) / 36e5 < n;
}

function lessThanSpinXDays(t, e, n) {
    return 0 < t.getTime() - e.getTime() && (t.getTime() - e.getTime()) / 864e5 < n;
}

function convertSpinXCountDownTime(t) {
    var e = t % 3600;
    return Math.floor(t / 3600) + `:${Math.floor(e / 60)}:` + Math.floor(e % 60);
}

function isFontAvailable(t) {
    var e = document.createElement("canvas").getContext("2d"), n = "monospace", o = (e.font = "72px " + n, 
    e.measureText("abcdefghijklmnopqrstuvwxyz").width), t = (e.font = `72px ${t}, ` + n, 
    e.measureText("abcdefghijklmnopqrstuvwxyz").width);
    return t !== o;
}

function loadGoogleFont(t) {
    var e = document.createElement("link");
    e.href = `https://fonts.googleapis.com/css2?family=${t.replace(" ", "+")}:wght@400;700&display=swap`, 
    e.rel = "stylesheet", document.head.appendChild(e);
}

"PACKAGE_VERSION_REPLACE" === spinx.version && (spinx.version = ""), "IS_DEVELOPMENT_REPLACE" === spinx.isDevelopment && (spinx.isDevelopment = !0);

class SpinXAnnouncement extends HTMLElement {
    data;
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        }), this.countDownId = "spinx-count-down", this.messageItemClass = "announcement-item";
    }
    connectedCallback() {
        this.render(), this.dispatchEvent(new CustomEvent("onLoadedAnnouncement", {
            bubbles: !0,
            composed: !0
        }));
    }
    render() {
        this.data = JSON.parse(this.dataset.json), this.data.scheduledAt && "string" == typeof this.data.scheduledAt && (this.data.scheduledAt = new Date(this.data.scheduledAt)), 
        this.data.launchedAt && "string" == typeof this.data.launchedAt && (this.data.launchedAt = new Date(this.data.launchedAt)), 
        this.data.closedAt && "string" == typeof this.data.closedAt && (this.data.closedAt = new Date(this.data.closedAt));
        var t, n = [];
        if ("upcoming_event" === this.data.spinState?.state) if (this.data.countDownToLaunch?.enabled && this.data.countDownToLaunch.content && this.data.countDownToLaunch.displayHours && lessThanSpinXHours(this.data.launchedAt, new Date(), this.data.countDownToLaunch.displayHours)) {
            let e = () => (this.data.launchedAt.getTime() - new Date().getTime()) / 1e3;
            setInterval(() => {
                var t = this.shadowRoot.getElementById(this.countDownId);
                t && (t.innerHTML = this.data.countDownToLaunch.content.replace(/{{TIME}}/g, convertSpinXCountDownTime(e())));
            }, 1e3), n.push(`<p class="${this.messageItemClass}" id="${this.countDownId}">${this.data.countDownToLaunch.content.replace(/{{TIME}}/g, convertSpinXCountDownTime(e()))}</p>`);
        } else this.data.upcomingEvent?.enabled && this.data.upcomingEvent.content && this.data.upcomingEvent.displayDays && lessThanSpinXDays(this.data.launchedAt, new Date(), this.data.upcomingEvent.displayDays) && n.push(`<p class="${this.messageItemClass}">${this.data.upcomingEvent.content.replace(/{{TIME}}/g, formatSpinXDateTime(this.data.launchedAt))}</p>`); else if ([ "ready_to_spin", "use_winning_prizes", "get_spin_by_ordering", "ready_to_spin_again" ].includes(this.data.spinState?.state)) if (this.data.countDownToClose?.enabled && this.data.countDownToClose.content && this.data.countDownToClose.displayHours && lessThanSpinXHours(this.data.closedAt, new Date(), this.data.countDownToClose.displayHours)) {
            let e = () => (this.data.closedAt.getTime() - new Date().getTime()) / 1e3;
            setInterval(() => {
                var t = this.shadowRoot.getElementById(this.countDownId);
                t && (t.innerHTML = this.data.countDownToClose.content.replace(/{{TIME}}/g, convertSpinXCountDownTime(e())));
            }, 1e3), n.push(`<p class="${this.messageItemClass}" id="${this.countDownId}">${this.data.countDownToClose.content.replace(/{{TIME}}/g, convertSpinXCountDownTime(e()))}</p>`);
        } else "ready_to_spin" === this.data.spinState?.state ? this.data.readyToSpin?.enabled && this.data.readyToSpin.content && (t = `<img class="spinx-icon-announcement" src="${this.data.openerIcon}" />`, 
        n.push(`<p class="${this.messageItemClass}">${this.data.readyToSpin.content.replace(/{{SPIN}}/g, t)}</p>`)) : "use_winning_prizes" === this.data.spinState?.state ? this.data.useWinningPrizes?.enabled && this.data.useWinningPrizes.content && n.push(`<p class="${this.messageItemClass}">${this.data.useWinningPrizes.content.replace(/{{CODE}}/g, this.data.spinState?.productCode)}</p>`) : "get_spin_by_ordering" === this.data.spinState?.state ? this.data.getSpinByOrdering?.enabled && (this.data.getSpinByOrdering.orderAmountRestriction?.enabled ? this.data.getSpinByOrdering.orderAmountRestriction.content && this.data.getSpinByOrdering.orderAmountRestriction.amount?.value && this.data.getSpinByOrdering.orderAmountRestriction.amount?.currency && (t = convertSpinXCurrency(this.data.getSpinByOrdering.orderAmountRestriction.amount.value, this.data.getSpinByOrdering.orderAmountRestriction.amount.currency), 
        n.push(`<p class="${this.messageItemClass}">${this.data.getSpinByOrdering.orderAmountRestriction.content.replace(/{{AMOUNT}}/g, t)}</p>`)) : this.data.getSpinByOrdering.content && n.push(`<p class="${this.messageItemClass}">${this.data.getSpinByOrdering.content}</p>`)) : "ready_to_spin_again" === this.data.spinState?.state && this.data.readyToSpinAgain?.enabled && this.data.readyToSpinAgain.content && (t = `<img class="spinx-icon-announcement" src="${this.data.openerIcon}" />`, 
        n.push(`<p class="${this.messageItemClass}">${this.data.readyToSpinAgain.content.replace(/{{SPIN}}/g, t)}</p>`));
        let e = "", o = (n.forEach(t => {
            e += t;
        }), "");
        n.forEach((t, e) => {
            o += `.spinx-announcement-container .${this.messageItemClass}:nth-child(${e + 1}) { animation-delay: ${3 * e}s; } `;
        }), this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: sticky;
          z-index: 1000;
          bottom: 0;
        }

        .spinx-announcement-container {
          opacity: 0;
          transition: opacity 0.5s linear;
          background-color: ${this.data.backgroundColor || "#fdc73b"};
          color: ${this.data.contentColor || "#121212"};
          font-family: '${this.data.fontFamily}', Arial, sans-serif;
          font-size: ${this.data.contentSize || 14}px;
          font-weight: 400;
          letter-spacing: 0.06rem;
          line-height: 1.8;
          text-align: center;
          width: 100%;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .spinx-announcement-container .${this.messageItemClass} {
          padding: 5px 0px;
          position: absolute;
          width: 100%;
          ${1 < n.length ? `opacity: 0; animation: slideUp ${3 * n.length}s infinite;` : "opacity: 1; transform: translateY(0%);"}
        }

        .spinx-icon-announcement {
          width: 22px;
          height: 22px;
          position: relative;
          top: 5px;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            transform: translateY(0%);
            opacity: 1;
          }
          45% {
            transform: translateY(0%);
            opacity: 1;
          }
          55% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        ${o}
      </style>

      <div class="spinx-announcement-container" style="display: none">
        ${e}
      </div>
    `, this.announcementContainer = this.shadowRoot.querySelector(".spinx-announcement-container"), 
        setTimeout(() => {
            this.announcementContainer.style.opacity = 1;
        }, 10), this.resetContainerHeight(), this.show();
    }
    show() {
        this.announcementContainer.style.display = "flex";
    }
    hide() {
        this.announcementContainer.style.display = "none";
    }
    resetContainerHeight() {
        setTimeout(() => {
            var t = this.shadowRoot.querySelectorAll("." + this.messageItemClass);
            let e = 0;
            t.forEach(t => {
                t.offsetHeight > e && (e = t.offsetHeight);
            }), this.announcementContainer.style.height = e + "px";
        }, 0);
    }
}

customElements.define("spinx-announcement", SpinXAnnouncement);

class SpinXOpener extends HTMLElement {
    data;
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render(), this.dispatchEvent(new CustomEvent("onLoadedOpener", {
            bubbles: !0,
            composed: !0
        }));
    }
    render() {
        this.data = JSON.parse(this.dataset.json);
        let t = this.data?.backgroundColor ? this.data.backgroundColor : "#2097df";
        var e = this.data?.contentColor ? this.data.contentColor : "#fff";
        this.shadowRoot.innerHTML = `
      <style>
        @keyframes rotateIn {
          0% {
            transform: rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: rotate(2880deg);
          }
        }

        @keyframes borderDisplay {
          0% {
            border-color: transparent;
            // box-shadow: 0px transparent;
          }
          100% {
            border-color: ${t};
            // box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          }
        }

        @keyframes contentDisplay {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .opener-button-container {
          position: ${"preview-in-box" === this.data?.viewMode ? "absolute" : "fixed"};
          ${"preview-in-box" === this.data?.viewMode ? "" : "z-index: 1001;"}
          ${"preview-in-box" === this.data?.viewMode ? "" : `bottom: ${this.data?.distance?.bottom ? this.data.distance.bottom + "px" : "60px"};`}
          ${"left" === this.data?.position ? "preview-in-box" === this.data?.viewMode ? "" : `left: ${this.data.distance?.left ? this.data.distance.left + "px" : "25px"};` : `right: ${this.data.distance?.right ? this.data.distance.right + "px" : "25px"};`}
          font-family: '${this.data.fontFamily}', Arial, sans-serif;
        }

        .opener-button-container[data-direction="right"] .opener-text {
          right: 70%;
        }
        .opener-button-container[data-direction="left"] .opener-text {
          left: 70%;
        }

        .opener-button {
          width: 52px;
          height: 52px;
          position: relative;
          z-index: 1003;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid transparent;
          background-color: #fff;
          cursor: pointer;
          // box-shadow: 0px 4px 8px transparent;
          transition: transform 0.1s ease, box-shadow 0.2s ease-out, border-color 1s ease-out;
          animation: rotateIn 1.2s forwards ease, borderDisplay 0.5s forwards ease-out 0.4s;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .opener-button img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .opener-button:hover {
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4) !important;
          transform: scale(1.05) !important;
        }

        .opener-button:active {
          transform: scale(0.95) !important;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }

        .opener-text {
          position: absolute;
          z-index: 1002;
          bottom: 4px;
          ${"left" === this.data?.position ? "border-radius: 0px 8px 8px 0px;" : "border-radius: 8px 0px 0px 8px;"}
          line-height: 1;
          padding: 8px 0px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.8;
          letter-spacing: 0.06rem;
          text-transform: uppercase;
          color: ${e};
          background-color: ${t};
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
          // opacity: 0;
          width: auto;
          transform: scaleX(0);
          transform-origin: ${this.data?.position};
          transition: 0.3s all ease;
          pointer-events: none;
        }

        .opener-text span {
            ${"left" === this.data?.position ? "padding: 0px 20px 0px 24px;" : "padding: 0px 24px 0px 20px;"}
        }

        @media only screen and (max-width: 600px) {
          .opener-text {
            display: none !important;
            animation: none;
          }
        }
      </style>

      <div class="opener-button-container" id="opener-button-container" data-direction="${this.data?.position}" style="display: none;">
        <div class="opener-text" id="opener-text"><span>${this.data?.content ? this.data.content : "Spin Now"}</span></div>
        <button class="opener-button" id="opener-button">
          <img src="${this.data?.openerIcon}" alt="${this.data?.content ? this.data.content : "Spin Now"}" />
        </button>
      </div>
    `, this.openerContainer = this.shadowRoot.getElementById("opener-button-container"), 
        this.openerButton = this.shadowRoot.getElementById("opener-button"), this.openerText = this.shadowRoot.getElementById("opener-text"), 
        this.data?.attentionEffect.enabled ? (this.openerButton.style.animation = "rotateIn 2s forwards ease, borderDisplay 0.5s forwards ease-out 0.8s", 
        this.openerText.style.animation = "contentDisplay 0.8s forwards ease-out 1.2s", 
        setInterval(() => {
            this.openerButton.style.animation = "none", this.openerButton.style.opacity = 1, 
            this.openerButton.style.borderColor = t, setTimeout(() => this.openerButton.style.animation = "rotateIn 2s forwards ease", 100);
        }, 1e3 * (this.data?.attentionEffect.intervalTime || 10))) : (this.openerButton.style.opacity = 1, 
        this.openerButton.style.borderColor = t, this.openerText.style.transform = "scaleX(1)"), 
        this.openerButton.addEventListener("click", () => this.click()), this.show();
    }
    show() {
        this.openerContainer.style.display = "block";
    }
    hide() {
        this.openerContainer.style.display = "none";
    }
    click() {
        this.dispatchEvent(new CustomEvent("onClickOpener", {
            bubbles: !0,
            composed: !0
        }));
    }
}

customElements.define("spinx-opener", SpinXOpener);

class SpinXPopup extends HTMLElement {
    data;
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render(), this.dispatchEvent(new CustomEvent("onLoadedPopup", {
            bubbles: !0,
            composed: !0
        }));
    }
    render() {
        this.data = JSON.parse(this.dataset.json), this.shadowRoot.innerHTML = `
      <style>
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          overflow-y: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1004;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        // .popup-overlay.fullscreen {
        //   width: 100%;
        // }

        // .popup-overlay.halfscreen {
        //   width: 60%;
        // }

        .popup-overlay.fullscreen.active {
          transform: translateX(0);
        }

        .popup-overlay.active {
          transform: translateX(-33%);
        }

        .popup-content {
          background: #fff;
          width: 100%;
          height: 100%;
          // max-width: 600px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          text-align: center;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 5px 15px;
          font-size: 32px;
          font-weight: bold;
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .close-button:hover {
          transform: rotate(90deg);
        }

        .popup-body {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100%;
          // gap: 20px;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: ${this.data.background?.backgroundColor || "#ffffff"};
          ${this.data.background?.backgroundImage ? `background-image: url(${this.data.background.backgroundImage});` : ""}
        }

        .space-column {
          flex: 0.4;
        }

        .popup-overlay.fullscreen .space-column {
          display: none;
        }

        .spin-column {
          flex: 1.1;
          padding: 0px;
          width: 100%;
        }

        .popup-overlay.fullscreen .spin-column {
          padding: 120px;
        }

        .info-column {
          flex: 1;
          padding: 20px 80px 20px 40px;
        }

        @media (max-width: 1024px) and (orientation: portrait) {
          .popup-body {
            flex-direction: column;
            padding-top: 60px;
            ${this.data.background?.mobileBackgroundImage ? `background-image: url(${this.data.background.mobileBackgroundImage});` : ""}
          }

          .popup-overlay.active {
            transform: translateX(0);
          }

          .space-column {
            display: none;
          }

          .spin-column {
            width: 60%;
          }
        }

        @media (max-width: 430px) and (orientation: portrait) {
          .popup-body {
            padding-top: 20px;
          }

          .spin-column {
            width: 90%;
          }
        }

        @media (max-width: 375px) and (orientation: portrait) {
          .popup-body {
            padding-top: 40px;
          }
        }

        @media (max-width: 1366px) and (orientation: landscape) {
          .spin-column {
            flex: 1.5;
          }
        }

        @media (max-width: 1024px) and (orientation: landscape) {
          .spin-column {
            flex: 1.8;
            padding: 0px;
          }
        }

        @media (max-width: 932px) and (orientation: landscape) {
          .spin-column {
            padding: 60px;
          }
        }

        @media (max-width: 740px) and (orientation: landscape) {
          .spin-column {
            padding: 20px;
          }
        }

        @media (max-width: 667px) and (orientation: landscape) {
          .spin-column {
            padding: 0px;
          }
        }
      </style>

      <div class="popup-overlay" id="popup-overlay">
        <div class="popup-content">
          <button class="close-button">&times;</button>
          <div class="popup-body">
            <div class="space-column"></div>
            <div class="spin-column"></div>
            <div class="info-column"></div>
          </div>
        </div>
      </div>
    `, this.shadowRoot.querySelector(".close-button").addEventListener("click", () => this.close());
    }
    get isOpened() {
        return this.shadowRoot.getElementById("popup-overlay").classList.contains("active");
    }
    setSpinContent(t) {
        this.shadowRoot.querySelector(".spin-column").replaceChildren(t);
    }
    setFormContent(t) {
        this.shadowRoot.querySelector(".info-column").replaceChildren(t);
    }
    open() {
        var t = this.shadowRoot.getElementById("popup-overlay");
        t.classList.remove("fullscreen", "halfscreen"), t.classList.add("full_screen" === this.data.displayType ? "fullscreen" : "halfscreen"), 
        t.classList.add("active");
    }
    close() {
        this.shadowRoot.getElementById("popup-overlay").classList.remove("active");
    }
}

customElements.define("spinx-popup", SpinXPopup);

class SpinXWheel extends HTMLElement {
    data;
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        }), this.init();
    }
    connectedCallback() {
        this.render(), this.dispatchEvent(new CustomEvent("onLoadedWheel", {
            bubbles: !0,
            composed: !0
        }));
    }
    init() {
        this.width = this.getAttribute("width") || 1e3, this.height = this.getAttribute("height") || 1e3, 
        this.stickerAngle = 45, this.angleOffset = 0, this.isSpinning = !1, this.isSpinningClass = "is-spinning", 
        this.tickerAnim, this.currentSlice = 0;
    }
    render() {
        this.data = JSON.parse(this.dataset.json), this.prizeAngle = this.data.prizes?.length ? 360 / this.data.prizes?.length : 0, 
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        #container {
          width: 100%;
          aspect-ratio: 1 / 1;
          position: relative;
          font-family: '${this.data.fontFamily}', Arial, sans-serif;
          font-size: ${this.data.contentSize || 32}px;
        }

        canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .ticker {
          position: absolute;
          width: 8%; /* Tăng chiều rộng của mũi tên */
          // height: auto;
          // top: 55px;
          // right: 37px;
          top: 10.2%;
          right: 6.4%;
          transform: translate(0, 0) rotate(${this.stickerAngle}deg); /* Xoay mũi tên để trỏ vào vòng quay */
          transform-origin: 50% 0%; /* Đặt gốc xoay của mũi tên */
          pointer-events: none;
        }

        .ticker-svg {
          fill: black; /* Màu nền mũi tên */
          stroke: yellow; /* Màu viền mũi tên */
          stroke-width: 2;
        }

        .${this.isSpinningClass} .ticker {
          animation: tick 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes tick {
          40% {
            transform: translate(0, 0) rotate(30deg);
          }
        }

        @media only screen and (max-width: 600px) {
          #container {
            width: 85%;
          }

          .ticker {
            width: 10%; /* Tăng chiều rộng của mũi tên */
            top: 9.5%;
            right: 4.2%;
          }
        }
      </style>

      <div id="container"></div>
    `, this.container = this.shadowRoot.getElementById("container"), this.wheel = document.createElement("canvas"), 
        this.wheel.classList.add("wheel"), this.wheel.width = this.width, this.wheel.height = this.height, 
        this.renderWheelCanvas(), this.data.circleCenter?.displayed ? (this.circle = document.createElement("canvas"), 
        this.circle.classList.add("circle"), this.circle.width = this.width, this.circle.height = this.height, 
        this.renderCircleCanvas()) : this.circle = null, this.ticker = document.createElement("div"), 
        this.ticker.classList.add("ticker"), this.ticker.innerHTML = `
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="${"standard" === this.data.sticker?.borderType ? "M249.021 176.878L248.941 177.077C243.469 190.758 230.702 220.22 214.067 246.427C205.764 259.507 196.231 272.207 185.848 281.748C175.629 291.137 163.336 298.611 149.656 298.611C136.1 298.611 123.888 291.483 113.663 282.329C103.308 273.057 93.8229 260.673 85.5485 247.79C68.9756 221.986 56.1877 192.478 50.3017 176.897C16.8118 88.2474 69.3156 1.00049 149.656 1.00049C188.662 1.00049 222.904 19.2152 242.61 50.959C262.299 82.6746 266.69 126.54 249.092 176.675L249.021 176.878ZM149.656 288.611C109.656 288.611 71.1394 203.759 59.6564 173.363C27.9749 89.5005 78.0846 11.0005 149.656 11.0005C221.228 11.0005 273.306 77.5005 239.656 173.363C228.903 200.246 189.656 288.611 149.656 288.611Z" : ""}" fill="${"standard" === this.data.sticker?.borderType && this.data.sticker.borderColor ? this.data.sticker.borderColor : "#77003C"}"/>
        <path d="M59.6561 173.363C71.1391 203.759 109.656 288.611 149.656 288.611C189.656 288.611 228.903 200.246 239.656 173.363C273.305 77.5005 221.228 11.0005 149.656 11.0005C78.0843 11.0005 27.9747 89.5005 59.6561 173.363Z" fill="${this.data.sticker?.backgroundColor || "#FE3198"}"/>
        <path d="M59.6561 173.363C71.1391 203.759 109.656 288.611 149.656 288.611C189.656 288.611 228.903 200.246 239.656 173.363C273.305 77.5005 221.228 11.0005 149.656 11.0005C78.0843 11.0005 27.9747 89.5005 59.6561 173.363Z" fill="url(#paint0_linear_1905_570)" fill-opacity="0.2"/>
        <defs>
          <linearGradient id="paint0_linear_1905_570" x1="150.045" y1="11.0005" x2="150.045" y2="288.611" gradientUnits="userSpaceOnUse">
            <stop offset="0.349094" stop-color="#FFE9F4"/>
            <stop offset="0.696231" stop-color="#030001"/>
          </linearGradient>
        </defs>
      </svg>
    `, this.container.append(this.wheel, this.circle || "", this.ticker);
    }
    darkenHex(t, e) {
        t = parseInt(t.slice(1), 16);
        return "#" + (Math.max(0, (t >> 16) - e) << 16 | Math.max(0, (t >> 8 & 255) - e) << 8 | Math.max(0, (255 & t) - e)).toString(16).padStart(6, "0");
    }
    drawPrizeText(e, t) {
        var n = this.width / 2, o = t.split(" ");
        let i = "";
        var a = [];
        for (let t = 0; t < o.length; t++) {
            var s = i + o[t] + " ", r = e.measureText(s).width;
            i = 270 < r && "" !== i ? (a.push(i), o[t] + " ") : s;
        }
        a.push(i);
        var c = Math.min(a.length, 2);
        for (let t = 0; t < c; t++) e.fillText(a[t], n / 1.1, (1 < c ? 0 : 10) + 36 * t);
    }
    renderWheelCanvas() {
        let n = this.wheel.getContext("2d"), o = this.width / 2, i = 2 * Math.PI / (this.data.prizes?.length || 0);
        n.clearRect(0, 0, this.width, this.height), "standard" === this.data.borderAround?.type && (n.beginPath(), 
        n.arc(o, o, o - 10, 0, 2 * Math.PI), n.lineWidth = 10, n.strokeStyle = this.data.borderAround.color || "#FFFFFF", 
        n.stroke()), this.data.prizes?.forEach((t, e) => {
            "auto_darken" === this.data.borderAround?.type && (n.beginPath(), n.moveTo(o, o), 
            n.arc(o, o, o, i * e + this.angleOffset, i * (e + 1) + this.angleOffset), 
            n.closePath(), n.fillStyle = this.darkenHex(t.config?.backgroundColor, 20), 
            n.fill()), n.beginPath(), n.moveTo(o, o), n.arc(o, o, o - 13, i * e + this.angleOffset, i * (e + 1) + this.angleOffset), 
            n.closePath(), n.fillStyle = t.config?.backgroundColor, n.fill(), this.data.prizeBorder?.displayed && (n.strokeStyle = this.data.prizeBorder.color, 
            n.lineWidth = 2, n.stroke()), n.save(), n.translate(o, o), n.rotate(i * e + i / 2 + this.angleOffset), 
            n.textAlign = "right", n.fillStyle = t.config?.contentColor || "#000000", 
            n.font = `bold ${t.config?.contentSize || this.data.contentSize || 32}px '${t.config?.fontFamily || this.data.fontFamily}', Arial, sans-serif`, 
            this.drawPrizeText(n, t.name), n.restore();
        }), this.wheel.style.transform = "rotate(0deg)", this.wheel.style.transition = "transform 15s cubic-bezier(0.20, 0.1, 0.20, 1)", 
        this.wheel.addEventListener("transitionend", this.onTransitionend.bind(this));
    }
    renderCircleCanvas() {
        var t = this.circle.getContext("2d"), e = this.width / 2;
        t.clearRect(0, 0, this.width, this.height), t.beginPath(), t.arc(e, e, e / 6, 0, 2 * Math.PI), 
        t.fillStyle = this.data.circleCenter?.backgroundColor || "#FFD700", t.fill(), 
        "standard" === this.data.circleCenter?.borderType && (t.lineWidth = 5, t.strokeStyle = this.data.circleCenter.borderColor || "#FFFFFF", 
        t.stroke());
    }
    spin(e) {
        if (!this.isSpinning) {
            this.isSpinning = !0, this.dispatchEvent(new CustomEvent("onStartSpin", {
                bubbles: !0,
                composed: !0
            })), this.container.classList.add(this.isSpinningClass), this.ticker.style.animation = "none", 
            this.runTickerAnimation();
            var n = e * this.prizeAngle, e = (e + 1) * this.prizeAngle;
            let t = Math.round(Math.random() * (e - n) + n);
            0 !== t && t % this.prizeAngle != 0 || t--;
            e = 3600 - t - this.stickerAngle;
            this.wheel.style.transform = `rotate(${e}deg)`;
        }
    }
    onTransitionend() {
        cancelAnimationFrame(this.tickerAnim), this.isSpinning = !1, this.container.classList.remove(this.isSpinningClass), 
        this.dispatchEvent(new CustomEvent("onEndSpin", {
            bubbles: !0,
            composed: !0
        }));
    }
    runTickerAnimation = () => {
        var t = window.getComputedStyle(this.wheel).transform.split("(")[1].split(")")[0].split(","), e = t[0];
        let n = Math.atan2(t[1], e);
        n < 0 && (n += 2 * Math.PI);
        t = Math.round(n * (180 / Math.PI)), e = Math.floor((t + this.stickerAngle) / this.prizeAngle);
        this.currentSlice !== e && (this.ticker.style.animation = "none", setTimeout(() => this.ticker.style.animation = null, 10), 
        this.currentSlice = e), this.tickerAnim = requestAnimationFrame(this.runTickerAnimation.bind(this));
    };
}

customElements.define("spinx-wheel", SpinXWheel);

class SpinXForm extends HTMLElement {
    data;
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render(), this.dispatchEvent(new CustomEvent("onLoadedForm", {
            bubbles: !0,
            composed: !0
        }));
    }
    render() {
        this.data = JSON.parse(this.dataset.json), this.shadowRoot.innerHTML = `
      <style>
        .container {
          font-family: '${this.data.fontFamily}', Arial, sans-serif;
        }

        .title {
          font-size: ${this.data.titleSize};
          color: ${this.data.titleColor};
        }

        .sub-title {
          font-size: ${this.data.subTitleSize};
          color: ${this.data.subTitleColor};
        }

        .content {
          font-size: ${this.data.contentSize};
          color: ${this.data.contentColor};
        }

        #spin-button {
          font-size: ${this.data.spinButtonContentSize};
          color: ${this.data.spinButtonContentColor};
          background-color: ${this.data.spinButtonBackgroundColor};
        }
      </style>

      <div class="container">
        <p class="title">${this.data.title || ""}</p>
        <p class="sub-title">${this.data.subTitle || ""}</p>
        <p class="content">${this.data.content || ""}</p>
        <button id="spin-button">${this.data.spinButtonContent || ""}</button>
      </div>

      <style>
        ${this.data.styleContent}
      </style>
    `, this.shadowRoot.getElementById("spin-button").addEventListener("click", () => this.dispatchEvent(new CustomEvent("onSpin", {
            bubbles: !0,
            composed: !0
        })));
    }
}

async function initSpinXApp(e, n) {
    let a = [];
    if ((n = n || {}).spinxSharePath || (n.spinxSharePath = "https://cdn.jsdelivr.net/gh/fortification-technologies/spinx" + (spinx.version ? "@" + version : "")), 
    removeSpinXPopup(), removeSpinXOpener(), removeSpinXAnnouncement(), [ "scheduled", "launching" ].includes(e?.status)) {
        var s = await readSpinXJson(`${n.spinxSharePath}/assets/themes/${e.config.theme}.json`);
        if ("launching" === e?.status) {
            var r = combineSpinXPopupData(e, s.popup);
            let o = combineSpinXWheelData(e, s.wheel), i = combineSpinXFormLoginRequiredData(e, s.formLoginRequired), t = initSpinXPopup(r, t => {
                let e = initSpinXWheel(o, () => console.log("onStartSpin"), () => console.log("onEndSpin"));
                t.setSpinContent(e), !o.fontFamily || a.includes(o.fontFamily) || isFontAvailable(o.fontFamily) || a.push(o.fontFamily);
                var n = initSpinXForm(i, () => {
                    var t = Math.floor(10 * Math.random());
                    e.spin(t);
                });
                t.setFormContent(n), !i.fontFamily || a.includes(i.fontFamily) || isFontAvailable(i.fontFamily) || a.push(i.fontFamily);
            });
            e?.config?.triggers?.spinWheelOpener?.enabled && initSpinXOpener(combineSpinXOpenerData(e, s.opener, n), () => {
                t && (t.isOpened ? t.close() : t.open());
            });
        }
        (e?.config.announcements.upcomingEvent.enabled || e?.config.announcements.readyToSpin.enabled || e?.config.announcements.useWinningPrizes.enabled || e?.config.announcements.getSpinByOrdering.enabled || e?.config.announcements.readyToSpinAgain.enabled) && ((r = combineSpinXAnnouncementData(e, s.announcement, n)).spinState = {
            state: "scheduled" === e.status ? "upcoming_event" : "ready_to_spin",
            productCode: ""
        }, initSpinXAnnouncement(r), !r.fontFamily || a.includes(r.fontFamily) || isFontAvailable(r.fontFamily) || a.push(r.fontFamily));
    }
    a.forEach(t => loadGoogleFont(t));
}

customElements.define("spinx-form", SpinXForm);