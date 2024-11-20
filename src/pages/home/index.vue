<template>
	<view class="content">
		<view class="m-2">{{title}}</view>
		<view>{{count}}</view>
		<view class="i-material-symbols:add-location w-100 h-100"></view>
		<view>{{$t('auto')}}</view>
		<button class="mx-10% p-10" size="default" @click="countClick">click</button>
		<button class="mx-10% p-10" size="default" @click="changeLang('zh')">中文</button>
		<button class="mx-10% p-10" size="default" @click="changeLang('en')">英文</button>
		<button class="mx-10% p-10" size="default" @click="handlquery">请求接口</button>
	</view>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue'
	import i18n from '@/lang/index.js'
	import { onLoad } from "@dcloudio/uni-app";
	import { useHomeStore } from "@/store/modules/home";
	import request from '@/utils/request';

	const homeStore = useHomeStore();
	const count = computed(() => homeStore.count);
	const title = ref('Hello')
	
	function countClick(){
		homeStore.increment()
	}
	
	function changeLang(type) {
		uni.setLocale(type)
		i18n.global.locale = type
	}

	function handlquery() {
		request({
			method:"post",
			url:"/api/auth/third_openapi/kdLogin",
			data: {
				"userDto": {
					"accountId": "1792709381133960192",
					"password": "EBFQUXJZpNOc94rr972mQyH8MtkCEsreKrSJxzhciz6SfVweG9JG37qvnZhiy0oyWHUM4MzrVD5JOrqyf95Ay08HZ5cl+SmnznNnRShpPMe6R1bh65ZHTeJ2K9QdlF6CJufTODTFswZY2I2ZTPGXE2CMmYD6lysX01m6Gs9xWtk=",
					"user": "13559263517"
				},
				"encryptType": 1
			}
		}).then(res=>{
			console.log(res)
		})
	}
</script>