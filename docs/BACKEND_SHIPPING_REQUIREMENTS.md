# Backend Requirements: Dynamic Shipping Charges (Checkout)

This document describes what the backend needs to implement so that **shipping charges for orders outside India** (e.g. USA, Dubai/UAE) work correctly with the checkout flow.

---

## 1. Price API – Add shipping fields (dynamic)

**Endpoint (existing):** `GET https://drmamatajain.valleyhoster.com/api/price/atoz`

The frontend expects the **same product/price response** to include **per-currency shipping amounts**. Add these fields to the product object you return:

| Field             | Type   | Description                                      |
|-------------------|--------|--------------------------------------------------|
| `shipping_inr`    | number | Shipping charge in INR (India: frontend uses 0)  |
| `shipping_usd`    | number | Shipping charge in USD (e.g. USA, rest of world) |
| `shipping_aed`    | number | Shipping charge in AED (UAE / Dubai)             |

- These values can be **dynamic** (from DB, config, or admin panel).
- For India, the frontend does **not** add shipping; it only adds shipping when the selected country is **not** India and the cart has **hardcopy** (physical) items.
- Example response shape:

```json
{
  "status": true,
  "product": {
    "name": "...",
    "ebook_inr": 199,
    "ebook_discount_inr": 99,
    "hardcopy_inr": 1999,
    "hardcopy_discount_inr": 999,
    "shipping_inr": 0,
    "shipping_usd": 15,
    "shipping_aed": 55
  }
}
```

If `shipping_*` fields are missing, the frontend treats shipping as **0** (no errors).

---

## 2. Create Payment API – New payload fields

**Endpoint (existing):** `POST https://testingdrmamatajain.valleyhoster.com/api/createPayment_t3`

The frontend now sends two **new** fields in the JSON body:

| Field            | Type   | Description                                              |
|------------------|--------|----------------------------------------------------------|
| `shipping_charge`| string | Shipping amount in the same currency as the order (e.g. `"15.00"`) |
| `total_amount`   | string | **Final amount to charge** = `book_amount` + `shipping_charge` (e.g. `"1014.00"`) |

**What you must do:**

1. **Use `total_amount` for the payment gateway**  
   When creating the Razorpay (or other) order, use **`total_amount`** as the amount to charge, **not** only `book_amount`.  
   - Convert to smallest currency unit (e.g. paise for INR, cents for USD) as required by the gateway.

2. **Store both in your DB**  
   Save `book_amount`, `shipping_charge`, and `total_amount` (and currency) on the order/payment record so you have a clear breakdown for invoices and support.

3. **Optional validation**  
   You may validate that `total_amount ≈ book_amount + shipping_charge` (within rounding) to avoid tampering.

---

## 3. Summary for backend developer

- **Price API:** Add `shipping_inr`, `shipping_usd`, `shipping_aed` to the product object (values can be dynamic from your side).
- **Create Payment API:** Accept `shipping_charge` and `total_amount`; use **`total_amount`** for the gateway charge and store all three amounts for the order.

No new endpoints are required; only extend the existing price and create-payment APIs as above.
