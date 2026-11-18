import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { CogIcon } from "@sanity/icons/Cog";
import { DocumentsIcon } from "@sanity/icons/Documents";
import { PackageIcon } from "@sanity/icons/Package";
import { WrenchIcon } from "@sanity/icons/Wrench";
import { pageTypes } from "./schemaTypes/pages";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("DAI Trade Hub")
    .items([
      S.listItem()
        .title("Pages")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Pages")
            .items(
              pageTypes.map((t) =>
                S.listItem().title(t.title!).icon(t.icon).child(S.document().schemaType(t.name).documentId(t.name).title(t.title!)),
              ),
            ),
        ),
      S.divider(),
      orderableDocumentListDeskItem({ type: "productCategory", title: "Products", icon: PackageIcon, S, context }),
      orderableDocumentListDeskItem({ type: "service", title: "Services", icon: WrenchIcon, S, context }),
      S.divider(),
      S.listItem()
        .title("Site settings")
        .icon(CogIcon)
        .child(S.document().schemaType("siteSettings").documentId("siteSettings").title("Site settings")),
    ]);
