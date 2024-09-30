import DefaultTheme from "vitepress/theme";
import "./custom.css";
import PageBubble from "./components/PageBubble/index.vue";

declare global {
  interface ImportMeta {
    env: {
      SSR: boolean;
      // 其他属性...
    };
  }
}

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import("oh-my-live2d");
      loadOml2d({
        dockedPosition: "right",
        models: [
          // {
          //   path: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
          //   position: [-35, 30],
          //   stageStyle: {
          //     width: 280,
          //   },
          // },
          {
            path: "https://model.oml2d.com/rem_2/model.json",
            scale: 0.12,
            position: [-50, -90],
            stageStyle: {
              width: 300,
              height: 430,
            },
          },
          {
            path: "https://model.oml2d.com/Pio/model.json",
            scale: 0.4,
            position: [30, 50],
            stageStyle: {
              width: 340,
              height: 300,
            },
          },
          {
            path: "https://model.oml2d.com/shizuku/shizuku.model.json",
            scale: 0.2,
            volume: 0,
            position: [30, 70],
            stageStyle: {
              height: 370,
              width: 300,
            },
          },
          // 黑猫
          // {
          //   path: "https://model.oml2d.com/cat-black/model.json",
          //   scale: 0.15,
          //   position: [0, 20],
          //   stageStyle: {
          //     height: 350,
          //   },
          // },
          {
            path: "https://model.oml2d.com/HK416-1-normal/model.json",
            position: [-40, 60],
            scale: 0.08,
            stageStyle: {
              height: 450,
            },
          },
          {
            path: "https://model.oml2d.com/HK416-2-normal/model.json",
            position: [0, 60],
            scale: 0.08,
            stageStyle: {
              height: 450,
            },
          },
          {
            path: "https://model.oml2d.com/HK416-2-destroy/model.json",
            position: [0, 60],
            scale: 0.08,
            stageStyle: {
              height: 450,
            },
          },
          {
            path: "https://model.oml2d.com/Kar98k-normal/model.json",
            position: [-10, 80],
            scale: 0.08,
            stageStyle: {
              height: 450,
              width: 320,
            },
          },
          {
            path: "https://model.oml2d.com/bilibili-22/index.json",
            position: [-10, 50],
            scale: 0.25,
            stageStyle: {
              width: 260,
            },
          },
          // {
          //   path: "https://model.oml2d.com/bilibili-33/index.json",
          //   position: [-30, 50],
          //   scale: 0.25,
          //   stageStyle: {
          //     width: 260,
          //   },
          // },
          // {
          //   path: "https://model.oml2d.com/chino/model.json",
          //   position: [0, 60],
          //   scale: 0.25,
          //   stageStyle: {},
          // },
          {
            path: "https://model.oml2d.com/haruto/haruto.model.json",
            position: [20, 80],
            scale: 0.15,
            stageStyle: {
              width: 280,
              height: 360,
            },
          },
          {
            path: "https://model.oml2d.com/koharu/model.json",
            position: [20, 60],
            scale: 0.15,
            stageStyle: {
              width: 280,
              height: 360,
            },
          },
          {
            path: "https://model.oml2d.com/kp31/model.json",
            position: [-40, -380],
            scale: 0.08,
            stageStyle: {
              width: 280,
              height: 400,
            },
          },
          {
            path: "https://model.oml2d.com/tia/model.json",
            scale: 0.3,
            position: [37, -40],
            stageStyle: {
              width: 360,
              height: 320,
            },
          },
        ],
      });
    }
    // 注册全局组件
    app.component("PageBubble", PageBubble);
  },
};
