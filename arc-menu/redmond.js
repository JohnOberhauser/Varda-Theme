/*
 * ArcMenu - A traditional application menu for GNOME 3
 *
 * ArcMenu Lead Developer and Maintainer
 * Andrew Zaech https://gitlab.com/AndrewZaech
 * 
 * ArcMenu Founder, Former Maintainer, and Former Graphic Designer
 * LinxGem33 https://gitlab.com/LinxGem33 - (No Longer Active)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const Me = imports.misc.extensionUtils.getCurrentExtension();

const {Clutter, Gtk, St} = imports.gi;
const BaseMenuLayout = Me.imports.menulayouts.baseMenuLayout;
const Constants = Me.imports.constants;
const Gettext = imports.gettext.domain(Me.metadata['gettext-domain']);
const MW = Me.imports.menuWidgets;
const PlaceDisplay = Me.imports.placeDisplay;
const PopupMenu = imports.ui.popupMenu;
const Utils =  Me.imports.utils;
const _ = Gettext.gettext;

const COLUMN_SPACING = 10;
const ROW_SPACING = 10;
const COLUMN_COUNT = 4;

var createMenu = class extends BaseMenuLayout.BaseLayout{
    constructor(mainButton) {
        super(mainButton,{
            Search: true,
            SearchType: Constants.SearchType.GRID_VIEW,
            VerticalMainBox: false
        });
    }
    createLayout(){
        this.rightBox = new St.BoxLayout({
            y_align: Clutter.ActorAlign.FILL,
            y_expand: true,
            vertical: true,
            style_class: 'right-box'
        });

        this.placesShortcuts = false;
        this.externalDevicesShorctus = false;
        this.networkDevicesShorctus = false;
        this.bookmarksShorctus = false;
        this.softwareShortcuts = false;

        if(!this._settings.get_boolean('disable-user-avatar')){
            this.user = new MW.UserMenuItem(this);
            this.rightBox.add(this.user.actor);
            this.rightBox.add(this._createHorizontalSeparator(Constants.SEPARATOR_STYLE.SHORT));
        }
        
        this.shortcutsBox = new St.BoxLayout({
            vertical: true
        });

        this.shortcutsScrollBox = this._createScrollBox({
            y_align: Clutter.ActorAlign.START,
            overlay_scrollbars: true,
            style_class: 'small-vfade'
        });     

        this.shortcutsScrollBox.add_actor(this.shortcutsBox);
        this.rightBox.add(this.shortcutsScrollBox);
        
        // Add place shortcuts to menu (Home,Documents,Downloads,Music,Pictures,Videos)
        this._displayPlaces();

        //draw bottom right horizontal separator + logic to determine if should show
        let shouldDraw = false;
        if(this._settings.get_value('directory-shortcuts-list').deep_unpack().length>0){
            this.placesShortcuts=true;
        }
        if(this._settings.get_value('application-shortcuts-list').deep_unpack().length>0){
            this.softwareShortcuts = true;
        }
        
        //check to see if should draw separator
        if(this.placesShortcuts && (this._settings.get_boolean('show-external-devices') || this.softwareShortcuts || this._settings.get_boolean('show-bookmarks'))  )
            shouldDraw=true;  
        if(shouldDraw){
            this.shortcutsBox.add(this._createHorizontalSeparator(Constants.SEPARATOR_STYLE.SHORT));
        }

        //External Devices and Bookmarks Shortcuts
        this.externalDevicesBox = new St.BoxLayout({
            vertical: true,
            x_expand: true,
            y_expand: true
        }); 
        this.shortcutsBox.add(this.externalDevicesBox);   

        this._sections = { };
        this.placesManager = new PlaceDisplay.PlacesManager();
        for (let i = 0; i < Constants.SECTIONS.length; i++) {
            let id = Constants.SECTIONS[i];
            this._sections[id] = new St.BoxLayout({
                vertical: true
            }); 
            this.placeManagerUpdatedID = this.placesManager.connect(`${id}-updated`, () => {
                this._redisplayPlaces(id);
            });

            this._createPlaces(id);
            this.externalDevicesBox.add(this._sections[id]);
        }

        //Add Application Shortcuts to menu (Software, Settings, Tweaks, Terminal)
        let SOFTWARE_TRANSLATIONS = [_("Software"), _("Settings"), _("Tweaks"), _("Terminal"), _("Activities Overview"), _("ArcMenu Settings")];
        let applicationShortcuts = this._settings.get_value('application-shortcuts-list').deep_unpack();
        for(let i = 0; i < applicationShortcuts.length; i++){
            let applicationName = applicationShortcuts[i][0];
            let shortcutMenuItem = new MW.ShortcutMenuItem(this, _(applicationName), applicationShortcuts[i][1], applicationShortcuts[i][2]);
            if(shortcutMenuItem.shouldShow)
                this.shortcutsBox.add(shortcutMenuItem.actor);
        }
        
        let rightPanelWidth = this._settings.get_int('right-panel-width');
        this.rightBox.style = "width: " + rightPanelWidth + "px;";
        this.shortcutsScrollBox.style = "width: " + rightPanelWidth + "px;";
        
        // Replacing horizontal stuff with this line
        this.mainBox.add(this.rightBox);
        this.displayAllApps();
    }
}
