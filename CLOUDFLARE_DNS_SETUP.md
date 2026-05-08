# Cloudflare DNS Setup for thesopan21.com

This guide will help you configure your custom domain `thesopan21.com` on Cloudflare to work with Firebase Hosting.

## Prerequisites
- Domain registered and managed on Cloudflare
- Firebase Hosting configured (already done ✅)

---

## DNS Records Required

You need to add **2 DNS records** to Cloudflare:

### 1. A Record (Points your domain to Firebase)
- **Type:** `A`
- **Name:** `@` (represents root domain thesopan21.com)
- **IPv4 address:** `199.36.158.100`
- **Proxy status:** 🟠 DNS only (turn OFF Cloudflare proxy)
- **TTL:** Auto

### 2. TXT Record (Verifies domain ownership)
- **Type:** `TXT`
- **Name:** `@`
- **Content:** `hosting-site=the-sopan-21`
- **TTL:** Auto

---

## Step-by-Step Instructions

### Step 1: Log in to Cloudflare
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Log in with your credentials
3. Select your domain: **thesopan21.com**

### Step 2: Navigate to DNS Settings
1. Click on the **DNS** tab in the left sidebar (or top menu)
2. You'll see the DNS management page with existing records

### Step 3: Add the A Record
1. Click **+ Add record** button
2. Fill in the following:
   ```
   Type: A
   Name: @
   IPv4 address: 199.36.158.100
   Proxy status: DNS only (click the cloud icon to make it gray)
   TTL: Auto
   ```
3. Click **Save**

> ⚠️ **IMPORTANT:** Make sure the Proxy status is **🟠 DNS only** (gray cloud), NOT proxied (orange cloud). Firebase requires direct DNS resolution.

### Step 4: Add the TXT Record
1. Click **+ Add record** button again
2. Fill in the following:
   ```
   Type: TXT
   Name: @
   Content: hosting-site=the-sopan-21
   TTL: Auto
   ```
3. Click **Save**

### Step 5: Remove Conflicting Records (If Any)
Check if you have any existing A or AAAA records for `@` or `thesopan21.com`:
- If yes, **delete them** or they will conflict
- Keep only the new A record pointing to `199.36.158.100`

---

## Verify Configuration

### 1. Check DNS Records in Cloudflare
After adding, your DNS records should look like this:

| Type | Name | Content/Target | Proxy Status |
|------|------|----------------|--------------|
| A | @ | 199.36.158.100 | DNS only 🟠 |
| TXT | @ | hosting-site=the-sopan-21 | DNS only 🟠 |

### 2. Verify in Firebase Console
1. Go back to Firebase Console
2. In the domain setup dialog, click **Verify** button
3. Firebase will check the DNS records
4. If successful, you'll see "Domain verified ✓"

---

## Troubleshooting

### DNS Changes Not Detected?
- **Wait 5-10 minutes** - DNS propagation can take time
- **Clear Cloudflare cache:** Go to Caching → Purge Everything
- **Check TTL:** Lower TTL values propagate faster

### Verification Still Failing?
1. **Check the proxy status** - Must be "DNS only" (gray cloud)
2. **Verify the exact IP:** `199.36.158.100`
3. **Check for typos** in TXT record: `hosting-site=the-sopan-21`
4. Use [DNS Checker](https://dnschecker.org/) to verify records globally

### SSL Certificate Issues?
- Firebase automatically provisions SSL certificates
- Can take **up to 24 hours** (usually 30 minutes - 2 hours)
- Status shows "Pending" → "Active" in Firebase Console

---

## Optional: Add www Subdomain

If you want **www.thesopan21.com** to also work:

### Option 1: Add Another A Record
```
Type: A
Name: www
IPv4 address: 199.36.158.100
Proxy status: DNS only
TTL: Auto
```

### Option 2: Add CNAME (Recommended)
```
Type: CNAME
Name: www
Target: thesopan21.com
Proxy status: DNS only
TTL: Auto
```

Then add `www.thesopan21.com` as another custom domain in Firebase Hosting.

---

## Final Steps

After DNS verification succeeds:

1. **Wait for SSL provisioning** - Firebase will show status
2. **Test your domain:**
   - Visit: https://thesopan21.com
   - Should show your portfolio (not Firebase welcome page)
3. **Monitor in Firebase Console** - Shows "Connected" status

---

## Quick Reference

### DNS Records Summary
```
A      @    199.36.158.100          (DNS only)
TXT    @    hosting-site=the-sopan-21
```

### Important Links
- [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [Firebase Hosting Console](https://console.firebase.google.com/project/the-sopan-21/hosting/main)
- [DNS Checker Tool](https://dnschecker.org/)

---

## Support

If you encounter issues:
1. Check [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting/custom-domain)
2. Review [Cloudflare DNS Documentation](https://developers.cloudflare.com/dns/)
3. Use Firebase Support in the console

---

**Last Updated:** May 8, 2026  
**Domain:** thesopan21.com  
**Firebase Project:** the-sopan-21
