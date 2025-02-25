export const id = "GUD_EVENT_SET_PALETTE_AT_TILE";
export const name = "Set Palette At Tile";
export const groups = ["Gud GBS Plugins", "EVENT_GROUP_SCREEN"];
export const subGroups = {
    EVENT_GROUP_SCREEN: "BACKGROUND",
    "Gud GBS Plugins": "BACKGROUND"
};

export const autoLabel = (fetchArg) => {
	const x = fetchArg("x");
    const y = fetchArg("y");
    const palette = fetchArg("palette");
    return `Set Palette (${palette}) At (${x}, ${y})`;
};

export const fields = [
    {
        label: "⚠️ Changes will be reset when scrolled offscreen!"
    },
    {
        type: "break"
    },
    {
        key: "x",
        label: "Tile X",
        description: "Tile X",
        type: "value",
        width: "50%",
        defaultValue: {
            type: "number",
            value: 0,
        },
    },
    {
        key: "y",
        label: "Tile Y",
        description: "Tile Y",
        type: "value",
        width: "50%",
        defaultValue: {
            type: "number",
            value: 0,
        },
    },
    {
        key: "palette",
        label: "Palette",
        description: "Palette",
        type: "value",
        width: "50%",
        defaultValue: {
            type: "number",
            value: 0,
        },
    },
];

export const compile = (input, helpers) => {
	const { _callNative, 
            _addComment, 
            _declareLocal, 
            _stackPush, 
            _stackPop, 
            variableSetToScriptValue } = helpers;
	
    _addComment("Set Palette At Tile");

    const tmpPalette = _declareLocal("tmp_palette", 1, true);
    variableSetToScriptValue(tmpPalette, input.palette);
    _stackPush(tmpPalette);

    const tmpY = _declareLocal("tmp_y", 1, true);
    variableSetToScriptValue(tmpY, input.y);
    _stackPush(tmpY);

    const tmpX = _declareLocal("tmp_x", 1, true);
    variableSetToScriptValue(tmpX, input.x);
    _stackPush(tmpX);

	_callNative("vm_set_palette_at_tile");

    _stackPop(3);
};