class CustomTooltip {
  init(params) {
    const eGui = (this.eGui = document.createElement('div'));
    const data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;

    eGui.classList.add('custom-tooltip');
    eGui.innerHTML = `<img class="structure-png-tooltip" src="${data.parent_structure_png}" />`;
  }
  getGui() {
    return this.eGui;
  }
}

export default CustomTooltip
