/*
    array -> array -> array -> array 
*/

var assert = require("assert");

let payload = {
  APP_ID: "F0029",
  RELEASE_ID: "S16OP",
  GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
  APP_TYPE: "UI5",
  FIORI_BSP: "SOFULFIL_MONS1",
  ICF_PATH: "/sap/bc/ui5_ui5/sap/sofulfil_mons1",
  BSP_PACKAGE: "UI_SOFULFIL_MONS1",
  ACH: "SD-FIO-HBA",
  FORM_FACTOR_TABLET: "X",
  FORM_FACTOR_PHONE: "X",
  FORM_FACTOR_DESKTOP: "X",
  TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
  FLPAppInfoToTileTargetMappingInfo: [
    {
      TILE_TM_KEY: "0390BD6E4EF6B4D394257FEC3E065183",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssueass",
      SEMANTIC_ACTION: "analyzeKPIDetailass",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "ET090PW4NWFHUY9Y9WACJ8NYG",
      TILE_PARAMETER: "SOFM_Variant=CreditBlock",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "0390BD6E4EF6B4D394257FEC3E065183",
          ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Engineer",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
        {
          TILE_TM_KEY: "0390BD6E4EF6B4D394257FEC3E065183",
          ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Technician",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "ET090PW4NWFHUY9Y9WACJ8NYG",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "",
          SUBTITLE_TEXT: "Resolve Credit Block",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "0390BD6E4EF6B4D394257FEC3E065183",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "306D035814DA6E83BFD4EBD532E26B8A",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "00O2TPL8V25EQPZ7I2DJRQCCB",
      TILE_PARAMETER: "",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "306D035814DA6E83BFD4EBD532E26B8A",
          ROLE_ID: "SAP_BR_OVERHEAD_ACCOUNTANT",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_OVERHEAD_ACCOUNTANT",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Cost Accountant - Overhead",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "00O2TPL8V25EQPZ7I2DJRQCCB",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "Sales Order Fulfillment",
          KEYWORDS: "",
          SUBTITLE_TEXT: "All Issues",
          INFO_TEXT: "Deprecated",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "306D035814DA6E83BFD4EBD532E26B8A",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "425C6FC689EA1FEDBC25DD5D351A792B",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "ET090PW4NWFG4NVBF9JLXX5HC",
      TILE_PARAMETER: "SOFM_Variant=BillingBlock",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "ET090PW4NWFG4NVBF9JLXX5HC",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "manage, purchasing, info record",
          SUBTITLE_TEXT: "Resolve Billing Block",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "425C6FC689EA1FEDBC25DD5D351A792B",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "A0B8AA312CCBDAD239D2B2D2282B3611",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "00O2TOBXDLX6WCD64LYPKLR1F",
      TILE_PARAMETER: "",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "A0B8AA312CCBDAD239D2B2D2282B3611",
          ROLE_ID: "SAP_BR_INTERNAL_SALES_REP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_INTERNAL_SALES_REP",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Internal Sales Representative",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
        {
          TILE_TM_KEY: "A0B8AA312CCBDAD239D2B2D2282B3611",
          ROLE_ID: "SAP_BR_OPERATION_CLERK_ACM",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_OPERATION_CLERK_ACM",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Operations Clerk (ACM)",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
        {
          TILE_TM_KEY: "A0B8AA312CCBDAD239D2B2D2282B3611",
          ROLE_ID: "SAP_BR_SETTLEMENT_CLERK_ACM",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_SETTLEMENT_CLERK_ACM",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Settlement Clerk (ACM)",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "00O2TOBXDLX6WCD64LYPKLR1F",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "FF_5",
          SUBTITLE_TEXT: "Resolve Issues",
          INFO_TEXT: "Phản đối",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "A0B8AA312CCBDAD239D2B2D2282B3611",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "A8F1FE24723742470C7D329226D1FE77",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "ET090PW4NWFHUY9XHNUUAN29Q",
      TILE_PARAMETER: "SOFM_Variant=DeliveryBlock",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "A8F1FE24723742470C7D329226D1FE77",
          ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Engineer",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
        {
          TILE_TM_KEY: "A8F1FE24723742470C7D329226D1FE77",
          ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Technician",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "ET090PW4NWFHUY9XHNUUAN29Q",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "",
          SUBTITLE_TEXT: "Resolve Delivery Block",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "A8F1FE24723742470C7D329226D1FE77",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "AAEFDD9F6A90E9DFCE15E7BE319959FA",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "ET090PW4NWFHUYLDQZ1G0JLNM",
      TILE_PARAMETER: "SOFM_Variant=DeliveryBlock",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "AAEFDD9F6A90E9DFCE15E7BE319959FA",
          ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Engineer",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
        {
          TILE_TM_KEY: "AAEFDD9F6A90E9DFCE15E7BE319959FA",
          ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Technician",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "ET090PW4NWFHUYLDQZ1G0JLNM",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "",
          SUBTITLE_TEXT: "Resolve Delivery Block",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "AAEFDD9F6A90E9DFCE15E7BE319959FA",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "C25C40298BF9EDBE0A714F5153C03440",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "ET090PW4NWFHUY9YT0ZB2PQ78",
      TILE_PARAMETER: "SOFM_Variant=Incomplete",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "C25C40298BF9EDBE0A714F5153C03440",
          ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Engineer",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
        {
          TILE_TM_KEY: "C25C40298BF9EDBE0A714F5153C03440",
          ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Technician",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "ET090PW4NWFHUY9YT0ZB2PQ78",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "",
          SUBTITLE_TEXT: "Resolve Incomplete Data",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "C25C40298BF9EDBE0A714F5153C03440",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "E3EF8155610CA9A94C5507531B281775",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "ET090PW4NWFHUR3PPAV0EU8BQ",
      TILE_PARAMETER: "",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "E3EF8155610CA9A94C5507531B281775",
          ROLE_ID: "SAP_BR_PROJ_FIN_CONTROLLER",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_PROJ_FIN_CONTROLLER",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Project Financial Controller",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "ET090PW4NWFHUR3PPAV0EU8BQ",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "F1681",
          SUBTITLE_TEXT: "Issues in Next 7 Days",
          INFO_TEXT: "Batches",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "E3EF8155610CA9A94C5507531B281775",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
    {
      TILE_TM_KEY: "EA711C1699FFDC28F2985640B11466B4",
      SYSTEM_ID: "UYZ001",
      GEN_APP_GUID: "379C9F193B35274AE1638C490211758F",
      SEMANTIC_OBJECT: "SalesOrderFulfillmentIssue",
      SEMANTIC_ACTION: "analyzeKPIDetails",
      ORIG_TILE_CATALOG_KEY: "81B4F320D51074482537A4CBC0FB05A2",
      ORIG_TILE_INSTANCE_ID: "ET090PW4NWFHUYLD5XOXHSP9P",
      TILE_PARAMETER: "SOFM_Variant=BillingBlock",
      ORIG_TM_CATALOG_KEY: "",
      ORIG_TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
      TM_PARAMETER: "(sap-ushell-next-navmode=explace)",
      TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
      FLPTileTargetMappingInfoToTechnicalCatalog: [
        {
          TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
          SYSTEM_ID: "UYZ001",
          TC_TYPE: "CAT",
          TC_ID: "SAP_TC_CEC_SD_COMMON",
          TC_SYSTEM_ALIAS: "",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPTechnicalCatalogToTechnicalCatalogText: [
            {
              TC_KEY: "81B4F320D51074482537A4CBC0FB05A2",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "CEC: Customer Engagement and Commerce - SD",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessRole: [
        {
          TILE_TM_KEY: "EA711C1699FFDC28F2985640B11466B4",
          ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_ENGINEER",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Engineer",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
        {
          TILE_TM_KEY: "EA711C1699FFDC28F2985640B11466B4",
          ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessRoleToBusinessRoleText: [
            {
              ROLE_ID: "SAP_BR_QUALITY_TECHNICIAN",
              SYSTEM_ID: "UYZ001",
              SPRAS: "E",
              DESCRIPTION: "Quality Technician",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
      FLPTileTargetMappingInfoToTargetMappingText: [
        {
          TM_INSTANCE_ID: "00O2TO433LUVINV1MB8HZ76QF",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TILE_TEXT: "Resolve Sales Order Issues",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToTileText: [
        {
          TILE_INSTANCE_ID: "ET090PW4NWFHUYLD5XOXHSP9P",
          SYSTEM_ID: "UYZ001",
          SPRAS: "E",
          TITLE_TEXT: "[Deprecated] Sales Order Fulfillment",
          KEYWORDS: "",
          SUBTITLE_TEXT: "Resolve Billing Block",
          INFO_TEXT: "",
          LANGUAGE: "English",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
        },
      ],
      FLPTileTargetMappingInfoToR_TileTMBusinessGroup: [],
      FLPTileTargetMappingInfoToR_TileTMBusinessCatalog: [
        {
          TILE_TM_KEY: "EA711C1699FFDC28F2985640B11466B4",
          BC_ID: "SAP_SD_BC_SO_PROC_OP",
          SYSTEM_ID: "UYZ001",
          TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
          FLPR_TileTMBusinessCatalogToBusinessCatalogText: [
            {
              BC_ID: "SAP_SD_BC_SO_PROC_OP",
              SPRAS: "E",
              SYSTEM_ID: "UYZ001",
              DESCRIPTION: "Sales - Sales Order Processing",
              LANGUAGE: "English",
              TRACKED_UUID: "557e02a7-de86-4f78-804e-a570f691a36d",
            },
          ],
        },
      ],
    },
  ],
};
/*let result_empty = [];

let result = payload.forEach((item) => {
  item.FLPAppInfoToTileTargetMappingInfo != undefined &&
    item.FLPAppInfoToTileTargetMappingInfo.length > 0 &&
    item.FLPAppInfoToTileTargetMappingInfo.forEach((nestedItem) => {
      nestedItem.FLPTileTargetMappingInfoToR_TileTMBusinessCatalog !=
        undefined &&
        nestedItem.FLPTileTargetMappingInfoToR_TileTMBusinessCatalog.length >
          0 &&
        nestedItem.FLPTileTargetMappingInfoToR_TileTMBusinessCatalog.forEach(
          (nestedNestedItem) => {
            nestedNestedItem.FLPR_TileTMBusinessCatalogToBusinessCatalogText !=
              undefined &&
              nestedNestedItem.FLPR_TileTMBusinessCatalogToBusinessCatalogText
                .length > 0 &&
              nestedNestedItem.FLPR_TileTMBusinessCatalogToBusinessCatalogText.forEach(
                (ultraNested) => {
                  if (ultraNested.BC_ID && ultraNested.DESCRIPTION) {
                    result_empty.push({
                      id: ultraNested.BC_ID,
                      description: ultraNested.DESCRIPTION,
                    });
                  }
                }
              );
          }
        );
    });
});

/* cleaner way */

/*let i = 0;
function getStrictObjects(arrayObjs, keyName) {
  return arrayObjs != undefined &&
    arrayObjs[keyName] != undefined &&
    arrayObjs[keyName].length > 0
    ? arrayObjs[keyName]
    : [];
}
let result_empty_2 = [];

payload.forEach((item) => {
  getStrictObjects(item, "FLPAppInfoToTileTargetMappingInfo").forEach(
    (element) => {
      getStrictObjects(
        element,
        "FLPTileTargetMappingInfoToR_TileTMBusinessGroup"
      ).forEach((element) => {
        getStrictObjects(
          element,
          "FLPR_TileTMBusinessGroupToBusinessGroupText"
        ).forEach((element) => {
          if (element.GROUP_ID && element.DESCRIPTION) {
            result_empty_2.push({
              group_id: element.BC_ID,
              description: element.DESCRIPTION,
            });
          }
        });
      });
    }
  );
});
*/

let newPayload = payload.FLPAppInfoToTileTargetMappingInfo;
let actual = [];
newPayload.forEach((item) => {
  if (actual.length > 0) {
    let checkFlag = actual.every((innerItem) => {
      return (
        innerItem.SEMANTIC_ACTION != item.SEMANTIC_ACTION &&
        innerItem.SEMANTIC_OBJECT != item.SEMANTIC_OBJECT
      );
    });
    if (checkFlag) {
      actual.push(item);
    }
  } else {
    actual.push(item);
  }
});

console.log(actual);

/**
 * cleaner
 */

let new_act = [];

let p = newPayload.filter((item) => {
  return (
    (new_act.every((innerItem) => {
      return (
        innerItem.SEMANTIC_ACTION != item.SEMANTIC_ACTION &&
        innerItem.SEMANTIC_OBJECT != item.SEMANTIC_OBJECT
      );
    }) && new_act.push(item)) > 0
  );
});

/*let every = function (array, fn) {
  let mappedValues = array.map(item => fn(item));
  let resultant = false;
  for(var i=0;i<mappedValues.length;i++) {
    resultant = resultant && mappedValues[i] && true;
  };
  return resultant;
};*/

assert.deepEqual(p, actual);

console.log(p);
