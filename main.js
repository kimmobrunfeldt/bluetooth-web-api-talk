// Simple example of Bluetooth Web API based on sample code by Vincent Scheib
// https://www.youtube.com/watch?v=4WYB6mL4AMY

var bluetooth = navigator.bluetooth || navigator.mozBluetooth || navigator.webkitBluetooth;

// All services taken from
// https://developer.bluetooth.org/gatt/services/Pages/ServicesHome.aspx
// Some services were dropped since they were not included in the Web
// bluetooth API yet apparently.
var services = [
    // 'alert_notification',
    'battery_service',
    // 'blood_pressure',
    // 'body_composition',
    // 'bond_management',
    // 'continuous_glucose_monitoring',
    // 'current_time',
    // 'cycling_power',
    // 'cycling_speed_and_cadence',
    // 'device_information',
    // 'environmental_sensing',
    // 'generic_access',
    // 'generic_attribute',
    // 'glucose',
    // 'health_thermometer',
    'heart_rate',
    // 'human_interface_device',
    // 'immediate_alert',
    // 'indoor_positioning',
    // 'internet_protocol_support',
    // 'link_loss',
    // 'location_and_navigation',
    // 'next_dst_change',
    // 'phone_alert_status',
    // 'reference_time_update',
    // 'running_speed_and_cadence',
    // 'scan_parameters',
    // 'tx_power',
    // 'user_data',
    // 'weight_scale'
];

document.querySelector('#find-devices').onclick = function() {
    if (!bluetooth) {
        throw new Error('Bluetooth not supported');
    }

    console.log('requestDevice..');
    navigator.bluetooth.requestDevice({
        filters:[{services:services}]
    }).then(onSuccess, onError);
};


function onSuccess(data) {
    console.log(data);
}

function onError(err) {
    console.log('Error:');
    console.log(err);
}
