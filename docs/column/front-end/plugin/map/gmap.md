# 高德地图插件简单用法-Vue3

官方文档：https://lbs.amap.com/api/jsapi-v2/guide/webcli/map-vue1

index.html
```html
<script>
  window._AMapSecurityConfig = {
    securityJsCode: "707a0aec7a3474a3d95593907bb0fb8d",
  }; //高德地图安全密钥
</script>
```

myMap.vue
```vue
<template>
  <div class="box">
    <div id="container" style="width: 100%; height: 100%; position: relative">
      <input
        v-if="showInput"
        v-model="keyword"
        class="keyword"
        id="keyword"
        placeholder="请输入搜索位置"
        style="position: absolute; right: 5px; top: 5px; z-index: 99"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { reactive, ref, shallowRef, watch } from "vue";

const props = defineProps({
  showInput: {
    type: Boolean,
    default: false,
  },
  coord: {
    type: Array,
    required: true,
  },
});

// watch(
//   () => props.coord,
//   (value) => {
//     center.value = value;
//     ininMap();
//     console.log("coord变化了", center.value, value);
//   },
//   { deep: true }
// );

const center = ref(props.coord);
const keyword = ref("");
// 存储搜索用的数据
const form = reactive({
  address: "",
});
let map = shallowRef(null);
const ininMap = () => {
  AMapLoader.load({
    key: "8f449447164eac96db0edc3a16d5b4e6", //api服务key--另外需要在public中使用安全密钥！！！
    version: "1.4.4", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.PlaceSearch", "AMap.AutoComplete"], // 需要使用的的插件列表
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 9, // 地图显示的缩放级别
        center: center.value,
      });

      var marker = new AMap.Marker({
        position: center.value, //位置
      });
      map.add(marker); //添加到地图

      AMap.plugin(
        [
          "AMap.Autocomplete",
          "AMap.PlaceSearch",
          "AMap.Geocoder",
          "AMap.ToolBar",
        ],
        function (
          callback:
            | ((this: MediaQueryList, ev: MediaQueryListEvent) => any)
            | null
        ) {
          const autoOptions = {
            input: "keyword", // 使用联想输入的input的id
          };
          const autocomplete = new AMap.Autocomplete(autoOptions);
          const placeSearch = new AMap.PlaceSearch({
            map: map,
          });
          const geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all",
          });
          const toolbar = new AMap.ToolBar(); //工具条插件
          map.addControl(toolbar);

          AMap.event.addListener(autocomplete, "select", function (e) {
            placeSearch.setCity(e.poi.adcode);
            placeSearch.search(e.poi.name, function (status, result) {
              const pois = result.poiList.pois;
              for (let i = 0; i < pois.length; i++) {
                if (pois[i].name === e.poi.name) {
                  console.log("搜索结果", pois[i]);
                  geocoder.getAddress(
                    [pois[i].location.lng, pois[i].location.lat],
                    function (status, result) {
                      console.log(result);
                      if (status === "complete" && result.info === "OK") {
                        form.address = result.regeocode.formattedAddress;
                      } else {
                        form.address = "";
                      }
                    }
                  );
                }
              }
            });
          });
        }
      );
    })
    .catch((e) => {});
};

ininMap();
</script>

<style lang="less" scoped>
:deep(.amap-controls) {
  :deep(.amap-toolbar) {
    position: absolute;
    left: 10px;
    top: 25px;
    z-index: 150;
  }
}
</style>
```