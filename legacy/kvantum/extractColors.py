import re
import xml.etree.ElementTree as ET
import sys

# Regex pattern for matching hex color codes (3 or 6 characters)
HEX_COLOR_PATTERN = re.compile(r"#[0-9a-fA-F]{3,6}")

def extract_hex_colors_from_svg(svg_file):
    """Extract unique hex colors from an SVG file."""
    tree = ET.parse(svg_file)
    root = tree.getroot()

    # Initialize a set to store unique hex colors
    unique_hex_colors = set()

    # Function to extract hex colors from attributes and style content
    def extract_colors_from_style(style):
        hex_colors = HEX_COLOR_PATTERN.findall(style)
        return hex_colors

    # Loop through each element in the SVG
    for elem in root.iter():
        # Check for 'style' attribute
        if 'style' in elem.attrib:
            style_hex_colors = extract_colors_from_style(elem.attrib['style'])
            unique_hex_colors.update(style_hex_colors)

        # Check for other color-related attributes like fill, stroke, etc.
        for attr in ['fill', 'stroke', 'stop-color']:
            if attr in elem.attrib:
                attr_hex_colors = extract_colors_from_style(elem.attrib[attr])
                unique_hex_colors.update(attr_hex_colors)

    return unique_hex_colors

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python extract_hex_colors.py <path_to_svg_file>")
        sys.exit(1)

    svg_path = sys.argv[1]

    try:
        hex_colors = extract_hex_colors_from_svg(svg_path)
        print("Unique hex colors found in the SVG:")
        for color in hex_colors:
            print(color)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
