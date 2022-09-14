<template>
    <div id="breadcrumb" class="spacer m-top-md">
        <h3>Breadcrumb</h3>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>

        <div id="breadcrumb-overview">
            <h4>Overview</h4>
            <p>Separators are automatically added in CSS through <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" rel="noreferrer noopener"><code>::before</code></a> and <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" rel="noreferrer noopener"><code>content</code></a>.</p>

            <div class="bd-example">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="breadcrumb-overview">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="breadcrumb-overview">Home</a></li>
                        <li class="breadcrumb-item"><a href="breadcrumb-overview">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>

            <figure class="highlight">
<pre><code class="language-html">&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
  &lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item active&quot; aria-current=&quot;page&quot;&gt;Home&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
  &lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item active&quot; aria-current=&quot;page&quot;&gt;Library&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
  &lt;ol class=&quot;breadcrumb&quot;&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;Library&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;breadcrumb-item active&quot; aria-current=&quot;page&quot;&gt;Data&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div>

        <div id="breadcrumb-accessibility">
            <h4>Accessibility</h4>
            <p>Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as <code>aria-label="breadcrumb"</code> to describe the type of navigation provided in the <code>&lt;nav&gt;</code> element, as well as applying an <code>aria-current="page"</code> to the last item of the set to indicate that it represents the current page.</p>
            <p>For more information, see the <a target="_blank" href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb" rel="noreferrer noopener">WAI-ARIA Authoring Practices for the breadcrumb pattern</a>.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumb'
    }
</script>
