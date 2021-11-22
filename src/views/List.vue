<template>
  <div class="list">
    <div>
      <span
        v-for="x in product_types"
        :key="x"
        class="list__btn"
        @click="getProductsByType(x)"
      >
        {{ x }}
      </span>
    </div>
    <el-row :gutter="10">
      <el-col
        class="list__item"
        v-for="item in productList"
        :key="item"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
      >
        <el-card class="card">
          <div class="card__img">
            <img
              :src="checkImageValid(item)"
              class="image"
              @click="openItemLink(item.website_link)"
            />
            <p class="card__brand">{{ item.brand }}</p>
          </div>
          <div class="card__info" style="padding: 14px">
            <h3>{{ item.name }}</h3>
            <div class="card__cart">
              <p class="card__price">{{ item.price_sign }} {{ item.price }}</p>
              <div class="card__cart__btn">+</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/api";
import { getProductApi, Product } from "@/type";
import constant from "@/utils/constant";
import { isImageValid } from "@/utils/isImageValid";
export default defineComponent({
  name: "List",
  setup() {
    const product_types = ref(constant.PRODUCT_TYPES);
    const productList = ref([] as Product[]);
    return {
      product_types,
      productList,
    };
  },
  mounted() {
    this.getProductsByType("Blush");
  },
  methods: {
    openItemLink(url: string) {
      window.open(url, "_blank");
    },
    checkImageValid(item: Product): string {
      if (isImageValid(item.image_link)) return item.image_link;
      else {
        const brandUrl = constant.BRAND_LIST.filter(
          (x) => x.name === item.brand
        )[0];
        return brandUrl && brandUrl.img_url ? brandUrl.img_url : "";
      }
    },
    getProductsByType(x: string) {
      api.store
        .getProduct({
          product_type: x,
        } as getProductApi)
        .then((res) => {
          this.productList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
<style lang="scss" scoped>
.list {
  padding: 50px;
  min-width: 400px;
  box-sizing: border-box;
  width: 100vw;
  &__btn {
    padding: 10px;
    cursor: pointer;
  }
  &__item {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0px;
  }
}
.card {
  height: 500px;
  & h3 {
    margin: 0;
  }
  &__img {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    & img {
      cursor: pointer;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 100%;
    }
  }
  &__info {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 200px;
  }
  &__brand {
    position: absolute;
    bottom: 0px;
    right: 20px;
    background-color: $color-main;
    padding: 10px 20px;
    color: #fff;
    margin-right: -20px;
  }
  &__price {
    font-size: 36px;
  }
  &__cart {
    position: absolute;
    width: 100%;
    bottom: -20px;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    flex-direction: column;
    &__btn {
      background-color: $color-main;
      color: #fff;
      width: 100%;
      font-size: 36px;
      cursor: pointer;
    }
  }
}
</style>
