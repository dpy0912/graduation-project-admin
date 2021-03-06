// 图片管理
import Layout from "@/layout/index.vue";
import { createNameComponent } from "../createNode";

const route = [
  {
    path: "/images",
    component: Layout,
    redirect: "/images/portMap",
    meta: {
      title: "图片管理",
      icon: "el-icon-picture",
    },
    alwayShow: true,
    children: [
      {
        path: "portMap",
        component: createNameComponent(() =>
          import("@/views/main/images-manage/port-map/index.vue")
        ),
        meta: {
          title: "港口地图设置",
          cache: false,
        },
      },
      {
        path: "portMapPoint",
        component: createNameComponent(() =>
          import("@/views/main/images-manage/port-map-point/index.vue")
        ),
        meta: {
          title: "港口点位地图设置",
          cache: false,
        },
      },
      {
        path: "waveForms",
        component: createNameComponent(() =>
          import("@/views/main/images-manage/wave-forms/index.vue")
        ),
        meta: {
          title: "波形图设置",
          cache: false,
        },
      },
      {
        path: "waveStats",
        component: createNameComponent(() =>
          import("@/views/main/images-manage/wave-stats/index.vue")
        ),
        meta: {
          title: "波形统计图设置",
          cache: false,
        },
      },
    ],
  },
];

export default route;
