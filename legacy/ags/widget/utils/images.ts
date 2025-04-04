import GdkPixbuf from "gi://GdkPixbuf?version=2.0";
import {Gdk} from "astal/gtk4";

/**
 * Creates a scaled texture at the desired width and height, cropping out extra content if the aspect
 * ratio of the image is different from the aspect ratio of the desired width/height
 * @param width desired width
 * @param height desired height
 * @param path full path to the file
 */
export function createScaledTexture(width: number, height: number, path: string) {
    // Load the image from file
    let pixbuf: GdkPixbuf.Pixbuf
    try {
        pixbuf = GdkPixbuf.Pixbuf.new_from_file(path)
    } catch (e) {
        return
    }

    // Get original dimensions
    const originalWidth = pixbuf.get_width()
    const originalHeight = pixbuf.get_height()

    // Compute scale factor to ensure the image covers the target area
    // This uses Math.max so that both dimensions are at least as large as desired
    const scaleFactor = Math.max(width / originalWidth, height / originalHeight)
    const newWidth = Math.ceil(originalWidth * scaleFactor)
    const newHeight = Math.ceil(originalHeight * scaleFactor)

    // Scale the image uniformly
    const scaled = pixbuf.scale_simple(newWidth, newHeight, GdkPixbuf.InterpType.BILINEAR)!

    // Compute offsets to crop the image centered
    const xOffset = Math.floor((newWidth - width) / 2)
    const yOffset = Math.floor((newHeight - height) / 2)
    const cropped = scaled.new_subpixbuf(xOffset, yOffset, width, height)

    // Create a texture from the cropped pixbuf
    return Gdk.Texture.new_for_pixbuf(cropped)
}