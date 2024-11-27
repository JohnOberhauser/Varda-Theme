import AstalNetwork from "gi://AstalNetwork"

export function getNetworkIcon(network: AstalNetwork.Network) {
    const { connectivity, primary, wifi, wired } = network;

    // Handle wired connection
    if (primary === AstalNetwork.Primary.WIRED) {
        if (wired.internet === AstalNetwork.Internet.CONNECTED) {
            return '󰈀';
        } else {
            return '󰈀'; // You could add more logic here for wired states if needed
        }
    }

    // Handle Wi-Fi connection
    if (primary === AstalNetwork.Primary.WIFI) {
        const { ssid, strength, internet, enabled } = wifi;

        // If Wi-Fi is disabled or there is no connectivity
        if (!enabled || connectivity === AstalNetwork.Connectivity.NONE) {
            return '󰤭';
        }

        // Based on Wi-Fi signal strength and internet status
        if (strength <= 25) {
            if (internet === AstalNetwork.Internet.DISCONNECTED) {
                return '󰤠';
            } else if (internet === AstalNetwork.Internet.CONNECTED) {
                return '󰤟';
            } else if (internet === AstalNetwork.Internet.CONNECTING) {
                return '󰤡';
            }
        } else if (strength <= 50) {
            if (internet === AstalNetwork.Internet.DISCONNECTED) {
                return '󰤣';
            } else if (internet === AstalNetwork.Internet.CONNECTED) {
                return '󰤢';
            } else if (internet === AstalNetwork.Internet.CONNECTING) {
                return '󰤤';
            }
        } else if (strength <= 75) {
            if (internet === AstalNetwork.Internet.DISCONNECTED) {
                return '󰤦';
            } else if (internet === AstalNetwork.Internet.CONNECTED) {
                return '󰤥';
            } else if (internet === AstalNetwork.Internet.CONNECTING) {
                return '󰤧';
            }
        } else {
            if (internet === AstalNetwork.Internet.DISCONNECTED) {
                return '󰤩';
            } else if (internet === AstalNetwork.Internet.CONNECTED) {
                return '󰤨';
            } else if (internet === AstalNetwork.Internet.CONNECTING) {
                return '󰤪';
            }
        }

        // Fallback if none of the conditions are met
        return '󰤯';
    }

    // Default or unknown status
    return '󰤮';
}