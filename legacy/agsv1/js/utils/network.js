export function getNetworkIcon(network) {
    const { connectivity, primary, wifi, wired } = network;

    // Handle wired connection
    if (primary === 'wired') {
        if (wired.internet === 'connected') {
            return '󰈀';
        } else {
            return '󰈀'; // You could add more logic here for wired states if needed
        }
    }

    // Handle Wi-Fi connection
    if (primary === 'wifi') {
        const { ssid, strength, internet, enabled } = wifi;

        // If Wi-Fi is disabled or there is no connectivity
        if (!enabled || connectivity === 'none') {
            return '󰤭';
        }

        // Based on Wi-Fi signal strength and internet status
        if (strength <= 25) {
            if (internet === 'disconnected') {
                return '󰤠';
            } else if (internet === 'connected') {
                return '󰤟';
            } else if (internet === 'connecting') {
                return '󰤡';
            }
        } else if (strength <= 50) {
            if (internet === 'disconnected') {
                return '󰤣';
            } else if (internet === 'connected') {
                return '󰤢';
            } else if (internet === 'connecting') {
                return '󰤤';
            }
        } else if (strength <= 75) {
            if (internet === 'disconnected') {
                return '󰤦';
            } else if (internet === 'connected') {
                return '󰤥';
            } else if (internet === 'connecting') {
                return '󰤧';
            }
        } else {
            if (internet === 'disconnected') {
                return '󰤩';
            } else if (internet === 'connected') {
                return '󰤨';
            } else if (internet === 'connecting') {
                return '󰤪';
            }
        }

        // Fallback if none of the conditions are met
        return '󰤯';
    }

    // Default or unknown status
    return '󰤮';
}