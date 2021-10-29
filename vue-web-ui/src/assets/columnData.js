const columnData = {
  kinetics: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Foreign Key(substance_relationships.id)",
      field: "fk_substance_relationship_id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Minimum pH",
      field: "pH_min",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Maximum pH",
      field: "pH_max",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "pH",
      field: "pH",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Minimum Half-life",
      field: "half_life_min",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Maximum Half-life",
      field: "half_life_max",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Half-life",
      field: "half_life",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Half-life Units",
      field: "half_life_units",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Minimum Rate",
      field: "rate_min",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Maximum Rate",
      field: "rate_max",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Rate",
      field: "rate",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Rate Units",
      field: "rate_units",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Reaction",
      field: "reaction",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Temperature (C)",
      field: "temp_C",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Activation Energy (kcal/mol)",
      field: "rate_units",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Comments",
      field: "comments",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    }
  ],
  substance_relationships: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Parent Foreign Key(generic_substances.id)",
      field: "fk_generic_substance_id_predecessor",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Product Foreign Key(generic_substances.id)",
      field: "fk_generic_substance_id_successor",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Foreign Key(substance_relationship_types.id)",
      field: "fk_substance_relationship_type_id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Relationship",
      field: "relationship",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Mixture Percentage",
      field: "mixture_percentage",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Percentage Type",
      field: "percentage_type",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Source",
      field: "source",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "QC Notes",
      field: "qc_notes",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Nearest Structure",
      field: "is_nearest_structure",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Nearest CASRN",
      field: "is_nearest_casrn",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Created By",
      field: "created_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Created At",
      field: "created_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated By",
      field: "updated_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated At",
      field: "updated_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    }
  ],
  substance_relationship_types: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Name",
      field: "name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Label Forward",
      field: "label_forward",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Label Backward",
      field: "label_backward",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Short Description Forward",
      field: "short_description_forward",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Short Description Backward",
      field: "short_description_backward",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Long Description Forward",
      field: "long_description_forward",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Long Description Backward",
      field: "long_description_backward",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Created By",
      field: "created_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Created At",
      field: "created_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated By",
      field: "updated_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated At",
      field: "updated_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    }
  ],
  compounds: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "DSSTox Compound ID",
      field: "dsstox_compound_id",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.value != null){
          return (
            `<a 
              class="grid-link"
              target="_blank"
              href="https://comptox-prod.epa.gov/dashboard/dsstoxdb/results?search=${params.value}"
            >
              ${params.value}
            </a>`
          )
        } else { return params.value }
      }
    },
    { 
      headerName: "Compound Structure",
      field: "dsstox_compound_structure",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.data["dsstox_compound_id"] != null) {
          const url = "https://ccte-api-ccd.epa.gov/ccdapp1/chemical-files/image/by-dtxcid/"
          return (
            `<a href="${url}${params.data["dsstox_compound_id"]}" target="_blank">
              <img 
                class="structure-png"
                src="${url}${params.data["dsstox_compound_id"]}"
              />
            </a>`
          )
        }
      }
    },
    { 
      headerName: "ACD IUPAC Name",
      field: "acd_iupac_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Molecular Formula",
      field: "mol_formula",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Chemical Type",
      field: "chemical_type",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Chiral Stereo",
      field: "chiral_stereo",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Organic Form",
      field: "organic_form",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Molecular Weight",
      field: "mol_weight",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Monoisotopic Mass",
      field: "monoisotopic_mass",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Fragment Count",
      field: "fragment_count",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Radical Count",
      field: "radical_count",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "MRV File",
      field: "mrv_file",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "MOL File",
      field: "mol_file",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "MOL File 3D",
      field: "mol_file_3d",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "SMILES",
      field: "smiles",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "SMILES",
      field: "smiles",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "InChIKey",
      field: "inchi",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "JChem InChIKey",
      field: "jchem_inchi_key",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Indigo InChIKey",
      field: "indigo_inchi_key",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "ACD Index Name",
      field: "acd_index_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Defined Isotope",
      field: "has_defined_isotope",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "PubChem CID",
      field: "pubchem_cid",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "ChemSpider ID",
      field: "chemspider_id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "ChEBI ID",
      field: "chebi_id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Created By",
      field: "created_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Created At",
      field: "created_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated By",
      field: "updated_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated At",
      field: "updated_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    }
  ],
  generic_substances: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Foreign Key(qc_levels.id)",
      field: "fk_qc_level_id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "DSSTox Substance ID",
      field: "dsstox_substance_id",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.value != null) {
          return (
            `<a 
              class="grid-link" 
              target="_blank"
              href="https://comptox-prod.epa.gov/dashboard/dsstoxdb/results?search=${params.value}"
            >
              ${params.value}
            </a>`
          )
        } else { return params.value }
      }
    },
    { 
      headerName: "Substance Structure",
      field: "dsstox_substance_structure",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.data["dsstox_substance_id"] != null) {
          const url = "https://ccte-api-ccd.epa.gov/ccdapp1/chemical-files/image/by-dtxsid/"
          return (
            `<a href="${url}${params.data["dsstox_substance_id"]}" target="_blank">
              <img 
                class="structure-png"
                src="${url}${params.data["dsstox_substance_id"]}"
              />
            </a>`
          )
        }
      }
    },
    { 
      headerName: "Preferred Name",
      field: "preferred_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "CASRN",
      field: "casrn",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Substance Type",
      field: "substance_type",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Substance Type",
      field: "substance_type",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "QC Notes",
      field: "qc_notes",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Source",
      field: "source",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "QC Notes Private",
      field: "qc_notes_private",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Created By",
      field: "created_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Created At",
      field: "created_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated By",
      field: "updated_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated At",
      field: "updated_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    }
  ],
  qc_levels: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Name",
      field: "name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Label",
      field: "label",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Description",
      field: "description",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Created By",
      field: "created_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Created At",
      field: "created_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated By",
      field: "updated_by",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Updated At",
      field: "updated_at",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    }
  ],
  author: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "First Name",
      field: "first_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Middle Name",
      field: "middle_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Last Name",
      field: "last_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    }
  ],
  citation: [
    { 
      headerName: "ID",
      field: "id",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "DOI",
      field: "doi",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "URL",
      field: "url",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Year",
      field: "year",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Month",
      field: "month",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Day",
      field: "day",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Publisher",
      field: "publisher",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Volume",
      field: "volume",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Issue",
      field: "issue",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Pages",
      field: "pages",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Title",
      field: "title",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Journal",
      field: "journal",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "PDF",
      field: "pdf",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    }
  ],
  transformation_view: [
    { 
      headerName: "Parent DSSTox ID",
      field: "predecessor_dsstox_id",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.value != null) {
          return (
            `<a 
              class="grid-link"
              target="_blank"
              href="https://comptox-prod.epa.gov/dashboard/dsstoxdb/results?search=${params.value}"
            >
              ${params.value}
            </a>`
          )
        } else { return params.value }
      }
    },
    { 
      headerName: "Parent Structure",
      field: "parent_structure_png",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.data["predecessor_dsstox_id"] != null) {
          const url = "https://ccte-api-ccd.epa.gov/ccdapp1/chemical-files/image/by-dtxsid/"
          return (
            `<a href="${url}${params.data["predecessor_dsstox_id"]}" target="_blank">
              <img 
                class="structure-png"
                src="${url}${params.data["predecessor_dsstox_id"]}"
              />
            </a>`
          )
        }
      }
    },
    { 
      headerName: "Parent Preferred Name",
      field: "predecessor_preferred_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Parent SMILES",
      field: "predecessor_smiles",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Parent CASRN",
      field: "predecessor_casrn",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Parent Type",
      field: "predecessor_type",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Parent QC Level",
      field: "predecessor_qc_level",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Product DSSTox ID",
      field: "successor_dsstox_id",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.value != null) {
          return (
            `<a 
              class="grid-link" 
              target="_blank"
              href="https://comptox-prod.epa.gov/dashboard/dsstoxdb/results?search=${params.value}"
            >
              ${params.value}
            </a>`
          )
        } else { return params.value }
      }
    },
    { 
      headerName: "Product Structure",
      field: "successor_structure_png",
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.data["successor_dsstox_id"] != null) {
          const url = "https://ccte-api-ccd.epa.gov/ccdapp1/chemical-files/image/by-dtxsid/"
          return (
            `<a href="${url}${params.data["successor_dsstox_id"]}" target="_blank">
              <img 
                class="structure-png"
                src="${url}${params.data["successor_dsstox_id"]}"
              />
            </a>`
          )
        }
      }
    },
    { 
      headerName: "Product Preferred Name",
      field: "successor_preferred_name",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Product SMILES",
      field: "successor_smiles",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: true
    },
    { 
      headerName: "Product CASRN",
      field: "successor_casrn",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Product Type",
      field: "successor_type",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Product QC Level",
      field: "successor_qc_level",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Relationship",
      field: "relationship",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Minimum pH",
      field: "pH_min",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Maximum pH",
      field: "pH_max",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "pH",
      field: "pH",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Minimum Half-life",
      field: "half_life_min",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Maximum Half-life",
      field: "half_life_max",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Half-life",
      field: "half_life",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Half-life Units",
      field: "half_life_units",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Minimum Rate",
      field: "rate_min",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Maximum Rate",
      field: "rate_max",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Rate",
      field: "rate",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Rate Units",
      field: "rate_units",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Temperature (C)",
      field: "temp_C",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Activation Energy (kcal/mol)",
      field: "rate_units",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Reaction",
      field: "reaction",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Comments",
      field: "comments",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Authors",
      field: "authors",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Year",
      field: "year",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Month",
      field: "month",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Day",
      field: "day",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Publisher",
      field: "publisher",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Title",
      field: "title",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Journal",
      field: "journal",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Volume",
      field: "volume",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Issue",
      field: "issue",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "Pages",
      field: "pages",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "DOI",
      field: "doi",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    },
    { 
      headerName: "URL",
      field: "url",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false,
      cellRenderer: function(params) {
        if (params.value != null) {
          return (
            `<a class="grid-link" href="${params.value}" target="_blank">${params.value}</a>`
          )
        } else { return params.value }
      }
    },
    { 
      headerName: "PDF",
      field: "pdf",
      filter: true,
      floatingFilter: true,
      sortable: true, 
      resizable: true,
      hide: false
    }
  ]
}

export default columnData
