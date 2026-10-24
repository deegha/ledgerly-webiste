---
title: "Attaching source documents"
description: "Where the attachment field is on each form, why it has to be used before you save, and how to name and keep the files."
order: 9
verifiedAgainst: "invoicegen @ 161f079 (2026-10-24)"
related:
  - /guide/compliance/data-protection
---

Every posted document should carry the evidence it was posted from: the supplier invoice, the
receipt, the transfer confirmation, the WHT certificate.

## Where

The **Attachments** field is on the bill, expense, supplier payment and debit note forms ("Drop
files here, or browse"). On a manual journal it's called **Supporting documents**.

## When: before you save

- **Bills:** attachments can be added or removed only while the bill is a **draft**.
- **Expenses and supplier payments:** only on the form, at the moment you record them.
- **Manual journals** are the only documents that accept attachments after posting.

The file uploads as soon as you pick it. Wait until it appears in the list before you click
**Issue**, **Record expense** or **Record payment**.

## How

- Use one file per document: a PDF, or a clear photo of the whole receipt.
- Ledgerly accepts PDFs, images (PNG, JPEG, GIF, WebP, HEIC), and CSV, text, Excel, Word and
  OpenDocument files (on bills, expenses, supplier payments and debit notes, **browse** lists only
  images and PDFs). Any other type is refused, and so is a file whose contents don't match its
  extension (for example a renamed file). The form then shows "Failed to upload" with the file
  name and the reason.
- Keep each file under the size the form shows ("Up to 10MB per file"). A larger file is
  refused.
- Name files before uploading, for example `2026-11-05_SupplierName_INV-4471.pdf`.
- Open an attachment from the document's own page. A PNG, JPEG, GIF or WebP image opens in a
  new tab; any other file, PDFs included, downloads to your computer instead.

## Forgot one?

You can't add it to a posted bill, expense or payment. Keep the file in your own archive, named
with the Ledgerly number (for example `EXP-2026-000014.pdf`), and note it. Don't post a journal
just to hold an attachment unless your accountant asks for that.

Voiding a document doesn't remove its attachments; the voided document keeps them.
