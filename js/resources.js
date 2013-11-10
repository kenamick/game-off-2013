/**
 * resources.js
 *
 * Copyright (c) 2013 Petar Petrov
 *
 * This work is licensed under the Creative Commons Attribution-NoDerivs 3.0 Unported License. 
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/3.0/.
 */

game.resources = [
    /* Graphics. 
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    {name: "boardtileset", type:"image", src: "assets/gfx/tiles.png"},
    {name: "earth_wizard", type:"image", src: "assets/gfx/walk_cycle.png"},
    {name: "spells", type:"image", src: "assets/gfx/spells.png"},
    {name: "earth_small", type:"image", src: "assets/gfx/earth_small.png"},
    
    // Hud
    {name: "dialog", type:"image", src: "assets/gui/dialog.png"},
    {name: "button_ok", type:"image", src: "assets/gui/button_ok.png"},
    {name: "button_cancel", type:"image", src: "assets/gui/button_cancel.png"},
    {name: "button_empty", type:"image", src: "assets/gui/button_empty.png"},

    {name: "icon_chance", type:"image", src: "assets/gui/icon_select_chance.png"},
    {name: "icon_spell", type:"image", src: "assets/gui/icon_select_spell.png"},
    {name: "icon_spell_abyss", type:"image", src: "assets/gui/icon_spell_abyss.png"},
    {name: "icon_spell_change", type:"image", src: "assets/gui/icon_spell_change.png"},
    {name: "icon_spell_clay", type:"image", src: "assets/gui/icon_spell_clay.png"},
    {name: "icon_spell_blind", type:"image", src: "assets/gui/icon_spell_blind.png"},
    {name: "icon_spell_freeze", type:"image", src: "assets/gui/icon_spell_freeze.png"},
    {name: "icon_spell_path", type:"image", src: "assets/gui/icon_spell_path.png"},
    {name: "icon_spell_teleport", type:"image", src: "assets/gui/icon_spell_teleport.png"},

    {name: "slot_empty", type:"image", src: "assets/gui/slot_empty.png"},
    {name: "slot_earth", type:"image", src: "assets/gui/slot_earth.png"},
    {name: "slot_water", type:"image", src: "assets/gui/slot_water.png"},
    {name: "slot_fire", type:"image", src: "assets/gui/slot_fire.png"},
    {name: "slot_air", type:"image", src: "assets/gui/slot_air.png"},

    {name: "dice", type:"image", src: "assets/gui/dice.png"},

    /* Sound effects. 
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
     * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
     */
	// {name: "rolldice", type: "audio", src: "assets/sfx/", channel : 2},
	{name: "burp", type: "audio", src: "assets/sfx/", channel: 1},
    {name: "song18_0", type: "audio", src: "assets/sfx/", channel: 1, stream: true}
];
