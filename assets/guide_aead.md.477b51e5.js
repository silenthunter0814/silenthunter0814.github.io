import{_ as e,c as t,o as a,a as n}from"./app.6c7e7ce9.js";const g=JSON.parse('{"title":"AEAD ciphers","description":"","frontmatter":{},"headers":[{"level":2,"title":"Key Derivation","slug":"key-derivation","link":"#key-derivation","children":[]},{"level":2,"title":"Authenticated Encryption/Decryption","slug":"authenticated-encryption-decryption","link":"#authenticated-encryption-decryption","children":[]},{"level":2,"title":"TCP","slug":"tcp","link":"#tcp","children":[]},{"level":2,"title":"UDP","slug":"udp","link":"#udp","children":[]}],"relativePath":"guide/aead.md","lastUpdated":1680621439000}'),r={name:"guide/aead.md"},s=n(`<h1 id="aead-ciphers" tabindex="-1">AEAD ciphers <a class="header-anchor" href="#aead-ciphers" aria-hidden="true">#</a></h1><p><a href="https://en.wikipedia.org/wiki/Authenticated_encryption" target="_blank" rel="noreferrer">AEAD</a> stands for Authenticated Encryption with Associated Data. AEAD ciphers simultaneously provide confidentiality, integrity, and authenticity. They have excellent performance and power efficiency on modern hardware. Users should use AEAD ciphers whenever possible.</p><p>The following AEAD ciphers are recommended. Compliant Shadowsocks implementations must support AEAD_CHACHA20_POLY1305. Implementations for devices with hardware AES acceleration should also implement AEAD_AES_128_GCM and AEAD_AES_256_GCM.</p><table><tr><th>Name</th><th>Alias</th><th>Key Size</th><th>Salt Size</th><th>Nonce Size</th><th>Tag Size</th></tr><tr><td>AEAD_CHACHA20_POLY1305</td><td>chacha20-ietf-poly1305</td><td>32</td><td>32</td><td>12</td><td>16</td></tr><tr><td>AEAD_AES_256_GCM</td><td>aes-256-gcm</td><td>32</td><td>32</td><td>12</td><td>16</td></tr><tr><td>AEAD_AES_128_GCM</td><td>aes-128-gcm</td><td>16</td><td>16</td><td>12</td><td>16</td></tr></table><p>Please refer to <a href="https://www.iana.org/assignments/aead-parameters/aead-parameters.xhtml" target="_blank" rel="noreferrer">IANA AEAD registry</a> for naming scheme and specification.</p><p>The way Shadowsocks using AEAD ciphers is specified in <a href="https://github.com/shadowsocks/shadowsocks-org/issues/30" target="_blank" rel="noreferrer">SIP004</a> and amended in <a href="https://github.com/shadowsocks/shadowsocks-org/issues/42" target="_blank" rel="noreferrer">SIP007</a>. <a href="https://github.com/shadowsocks/shadowsocks-org/issues/30" target="_blank" rel="noreferrer">SIP004</a> was proposed by <a href="https://github.com/Mygod" target="_blank" rel="noreferrer">@Mygod</a> with design inspirations from <a href="https://github.com/wongsyrone" target="_blank" rel="noreferrer">@wongsyrone</a>, <a href="https://github.com/noisyfox" target="_blank" rel="noreferrer">@Noisyfox</a> and <a href="https://github.com/breakwa11" target="_blank" rel="noreferrer">@breakwa11</a>. <a href="https://github.com/shadowsocks/shadowsocks-org/issues/42" target="_blank" rel="noreferrer">SIP007</a> was proposed by <a href="https://github.com/riobard" target="_blank" rel="noreferrer">@riobard</a> with input from <a href="https://github.com/madeye" target="_blank" rel="noreferrer">@madeye</a>, <a href="https://github.com/Mygod" target="_blank" rel="noreferrer">@Mygod</a>, <a href="https://github.com/wongsyrone" target="_blank" rel="noreferrer">@wongsyrone</a>, and many others.</p><h2 id="key-derivation" tabindex="-1">Key Derivation <a class="header-anchor" href="#key-derivation" aria-hidden="true">#</a></h2><p>The master key can be input directly from user or generated from a password. The key derivation is still following EVP_BytesToKey(3) in OpenSSL. The detailed spec can be found <a href="https://wiki.openssl.org/index.php/Manual:EVP_BytesToKey(3)" target="_blank" rel="noreferrer">here</a></p><p><a href="https://tools.ietf.org/html/rfc5869" target="_blank" rel="noreferrer">HKDF_SHA1</a> is a function that takes a secret key, a non-secret salt, an info string, and produces a subkey that is cryptographically strong even if the input secret key is weak.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">HKDF_SHA1(key, salt, info) =&gt; subkey</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The info string binds the generated subkey to a specific application context. In our case, it must be the string &quot;ss-subkey&quot; without quotes.</p><p>We derive a per-session subkey from a pre-shared master key using HKDF_SHA1. Salt must be unique through the entire life of the pre-shared master key.</p><h2 id="authenticated-encryption-decryption" tabindex="-1">Authenticated Encryption/Decryption <a class="header-anchor" href="#authenticated-encryption-decryption" aria-hidden="true">#</a></h2><p>AE_encrypt is a function that takes a secret key, a non-secret nonce, a message, and produces ciphertext and authentication tag. Nonce must be unique for a given key in each invocation.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">AE_encrypt(key, nonce, message) =&gt; (ciphertext, tag)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>AE_decrypt is a function that takes a secret key, non-secret nonce, ciphertext, authentication tag, and produces original message. If any of the input is tampered with, decryption will fail.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">AE_decrypt(key, nonce, ciphertext, tag) =&gt; message</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-hidden="true">#</a></h2><p>An AEAD encrypted TCP stream starts with a randomly generated salt to derive the per-session subkey, followed by any number of encrypted chunks. Each chunk has the following structure:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[encrypted payload length][length tag][encrypted payload][payload tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Payload length is a 2-byte big-endian unsigned integer capped at 0x3FFF. The higher two bits are reserved and must be set to zero. Payload is therefore limited to 16*1024 - 1 bytes.</p><p>The first AEAD encrypt/decrypt operation uses a counting nonce starting from 0. After each encrypt/decrypt operation, the nonce is incremented by one as if it were an unsigned little-endian integer. Note that each TCP chunk involves two AEAD encrypt/decrypt operation: one for the payload length, and one for the payload. Therefore each chunk increases the nonce twice.</p><h2 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-hidden="true">#</a></h2><p>An AEAD encrypted UDP packet has the following structure</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[salt][encrypted payload][tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The salt is used to derive the per-session subkey and must be generated randomly to ensure uniqueness. Each UDP packet is encrypted/decrypted independently, using the derived subkey and a nonce with all zero bytes.</p>`,26),o=[s];function i(d,c,p,l,h,u){return a(),t("div",null,o)}const f=e(r,[["render",i]]);export{g as __pageData,f as default};