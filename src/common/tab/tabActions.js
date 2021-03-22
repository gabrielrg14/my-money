import consts from '../../consts'

export function selectTab(tabId) {
    return {
        type: consts.TAB_SELECTED,
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)

    return {
        type: consts.TAB_SHOWED,
        payload: tabsToShow
    }
}