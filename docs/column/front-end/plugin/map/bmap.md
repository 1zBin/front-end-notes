# 百度地图插件简单用法-Vue3

简单教程：https://juejin.cn/post/7107254368273088543
官方文档：https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget
JavaScript API v3.0 方法参考文档：https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0

引入插件填上密钥之后，子组件

baiduMap.vue
```vue
<template>
  <div class="box">
    <div class="search">
      <input v-model="keyword" class="keyword" placeholder="请输入搜索位置" />
      <button @click="searchFn">搜索</button>
    </div>
    <div class="map" ref="baiduRef"></div>
  </div>
</template>
<script setup>
  import { ref, onMounted, watch } from "vue";

  const props = defineProps({
    coord: {
      type: Object,
      required: true,
    },
  });

  const emits = defineEmits(["refreshCoord"]);

  const baiduRef = ref();
  const keyword = ref("");
  const map = ref();
  const point = ref();
  const lng = ref(props.coord.lng);
  const lat = ref(props.coord.lat);

  watch(
  () => props.coord,
  () => {
  lng.value = props.coord.lng;
  lat.value = props.coord.lat;
  console.log("坐标发生了变化", props.coord, lng.value, lat.value);
  initMap(lng.value, lat.value);
  },
  { deep: true }
  );

  function initMap(lng, lat) {
  map.value = new BMap.Map(baiduRef.value); // 创建Map实例
  point.value = new BMap.Point(lng, lat); // 创建点坐标

  map.value.centerAndZoom(point.value, 11);
  map.value.enableScrollWheelZoom(true); //滚轮缩放

  var opts = { offset: new BMap.Size(10, 50) };
  map.value.addControl(new BMap.NavigationControl(opts)); // 平移缩放控件
  map.value.addControl(new BMap.ScaleControl()); // 添加比例尺控件
  map.value.addControl(new BMap.OverviewMapControl()); // 缩略地图
  map.value.addControl(new BMap.MapTypeControl()); // 地图类型

  const marker = new BMap.Marker(new BMap.Point(lng, lat));
  map.value.addOverlay(marker);
  marker.addEventListener("click", overlayStyle);
  }

  // 获取覆盖物属性
  function overlayStyle(e) {
  var p = e.target;
  if (p instanceof BMap.Marker) {
  //   alert(
  //     "该覆盖物是点，点的坐标为：" +
  //       p.getPosition().lng +
  //       "," +
  //       p.getPosition().lat
  //   );
  emits("refreshCoord", e.point);
  } else {
  alert("无法获知该覆盖物类型");
  }
  }

  onMounted(() => {
  initMap(lng.value, lat.value);
  });

  const searchFn = () => {
  if (keyword.value) {
  let local = new BMap.LocalSearch(map.value, {
  renderOptions: { map: map.value },
  });
  local.search(keyword.value);
  map.value.addEventListener("click", function (e) {
  emits("refreshCoord", e.point);
  });
  } else {
  initMap(lng.value, lat.value);
  }
  };
</script>
<style lang="less" scoped>
  .box {
  position: relative;
  width: 100%;
  height: 600px;
  .search {
  position: absolute;
  top: 2%;
  left: 1%;
  z-index: 99;
  .keyword {
  height: 25px;
  }
  button {
  height: 25px;
  margin-left: 10px;
  }
  }
  .map {
  width: 100%;
  height: 100%;
  }
  }
</style>
```

父组件传入经纬度

``` js
let coord = reactive({ lat: "", lng: "" });
```