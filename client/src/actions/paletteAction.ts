export const SET_CLICKED_PALETTE = 'paletteAction/SET_CLICKED_PALETTE' as const;

export const setClickedPalette = (palette: object) => ({
  type: SET_CLICKED_PALETTE,
  palette,
});

export type PaletteAction = ReturnType<typeof setClickedPalette>;
