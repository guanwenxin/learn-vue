import Vue from 'vue'
const EventBus = new Vue();

const EventType = {
    DATA_TYPE: 'DATA_TYPE'
}
// $on
// $emit
export {
    EventBus, EventType
}