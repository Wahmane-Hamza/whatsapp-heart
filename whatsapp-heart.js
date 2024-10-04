// this code for hovering all react button in whatsapp
const elements = document.querySelectorAll("._amk6._amlo");

const mouseOverEvent = new MouseEvent("mouseover", {
  bubbles: true,
  cancelable: true,
  view: window,
});

function simulateHover() {
  elements.forEach((element) => {
    element.dispatchEvent(mouseOverEvent);
  });
}

simulateHover();

// this for get all react button in whatsapp
const emojis = document.querySelectorAll(".x78zum5.x6s0dn4.xl56j7k.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1f6kntn.xk50ysn.x7o08j2.xtvhhri.x14yjl9h.xudhj91.x18nykt9.xww2gxu.x12s1jxh.xkdsq27.xwwtwea.xezl2tj.xlrawln.x1lnqpwl.x1gnnqk1.xpk4wdd")

// this code for clicking all react button in whatsapp
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function clickButtons() {
  for (const button of emojis) {
    button.click();
    await delay(1000);
    const heart = document.querySelectorAll(
      ".x1n2onr6.x1hmns74.x1cpjm7i.xmp3d9r.x1mnguzg.x24eo0u.x1mjto6.xfbg1o9.xtlfrb3.x8abzzr.x1xyc8vu.x4cz87.x78zum5.x6s0dn4.xl56j7k.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1f6kntn.xk50ysn.x7o08j2.xtvhhri.x14yjl9h.xudhj91.x18nykt9.xww2gxu.x12s1jxh.xkdsq27.xwwtwea.xjbqb8w.x1useyqa.xsdox4t.x1gnnqk1.xpk4wdd"
    );
    const share = document.querySelector(
      ".x1okw0bk.xoj7uri.x16dsc37.x1ypdohk.xeq5yr9" // share button have same class of react button so this is to close it when it clicked
    );
    if (share) {
      share.click();
      await delay(500);
    } else {
      if (heart.length != 6) { // if the button is already clicked so we change it to heart
        heart[4].click();
        await delay(500);
        button.click();
        await delay(1000);
      }
      const updatedHeart = document.querySelectorAll(
        ".x1n2onr6.x1hmns74.x1cpjm7i.xmp3d9r.x1mnguzg.x24eo0u.x1mjto6.xfbg1o9.xtlfrb3.x8abzzr.x1xyc8vu.x4cz87.x78zum5.x6s0dn4.xl56j7k.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1f6kntn.xk50ysn.x7o08j2.xtvhhri.x14yjl9h.xudhj91.x18nykt9.xww2gxu.x12s1jxh.xkdsq27.xwwtwea.xjbqb8w.x1useyqa.xsdox4t.x1gnnqk1.xpk4wdd"
      );
      updatedHeart[1].click();
    }
  }
}

clickButtons();
