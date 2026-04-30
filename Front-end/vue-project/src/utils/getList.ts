import { useRouterStore } from '@/stores/router'
import { type MenuItem } from '@/types/router'
import router from '@/router'
export default async function getDynamicRouter() {
    const routerStore =  useRouterStore()
    //本地
    const localRouterList = localStorage.getItem('RouterList');
    const parsedRouterData = JSON.parse(localRouterList!);

    if (parsedRouterData) {
        await routerStore.dynamicMenu(parsedRouterData.routerList as MenuItem[])
        routerStore.routerList.forEach(item => {
            router.addRoute('main', item)
        })
    }
}