  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>sockjs-client/lib/sockjs.js at master · sockjs/sockjs-client</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="eMsD/138C1oBqdYuMRyvMlr306VrmhtLO/WVsZsdeko=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-0c9d87dff5611078dcc29621367346a73a74b001.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-aa6e470c0369c01f9c62cc0cbccd30ce045f4177.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-f615f7544ba636b083d742a0b415479b5b674fd4.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-48cf9d3d3a4763f4c8546038b20b9716034b1c38.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/sockjs/sockjs-client/blob/3f7e5f4ef5673dc15d3d3db890bc82a725f0c91d/lib/sockjs.js'>
    <meta property="og:title" content="sockjs-client"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/sockjs/sockjs-client"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/bf5c23b86d1bfa81be84315d1c90a194?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="WebSocket emulation - Javascript client. Contribute to sockjs-client development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="sockjs/sockjs-client"/>

    <meta name="description" content="WebSocket emulation - Javascript client. Contribute to sockjs-client development by creating an account on GitHub." />

  <link href="https://github.com/sockjs/sockjs-client/commits/master.atom" rel="alternate" title="Recent Commits to sockjs-client:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              <div class="topsearch command-bar-activated ">
      <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="maklcz" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
  <ul class="top-nav">
      <li class="explore"><a href="https://github.com/explore">Explore</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
    <li><a href="http://help.github.com">Help</a></li>
  </ul>
</div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/maklcz" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/9c4e301657683d1ed7bd546a6e57871e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> maklcz
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="eMsD/138C1oBqdYuMRyvMlr306VrmhtLO/WVsZsdeko=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2088939" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container js-select-menu-pane">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/sockjs/sockjs-client/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/sockjs/sockjs-client/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/sockjs/sockjs-client/stargazers">1,116</a>
    </li>

        <li>
          <a href="/sockjs/sockjs-client/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/sockjs/sockjs-client/network" class="social-count">58</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/sockjs" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">sockjs</span>
                  </a></span> /
                <strong><a href="/sockjs/sockjs-client" class="js-current-repository">sockjs-client</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/sockjs/sockjs-client" class="selected" highlight="[:repo_source, :repo_downloads, :repo_commits, :repo_tags, :repo_branches]">Code</a></li>
    <li><a href="/sockjs/sockjs-client/network" highlight="[:repo_network]">Network</a></li>
    <li><a href="/sockjs/sockjs-client/pulls" highlight="[:repo_pulls]">Pull Requests <span class='counter'>4</span></a></li>

      <li><a href="/sockjs/sockjs-client/issues" highlight="[:repo_issues]">Issues <span class='counter'>28</span></a></li>

      <li><a href="/sockjs/sockjs-client/wiki" highlight="[:repo_wiki]">Wiki</a></li>


    <li><a href="/sockjs/sockjs-client/graphs" highlight="[:repo_graphs, :repo_contributors]">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/sockjs/sockjs-client/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">14</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/dev/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="dev" rel="nofollow" title="dev">dev</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/dev-new/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="dev-new" rel="nofollow" title="dev-new">dev-new</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/gh-pages/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/master/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/origin_header/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="origin_header" rel="nofollow" title="origin_header">origin_header</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.3.4/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.3.4" rel="nofollow" title="v0.3.4">v0.3.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.3.2/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.3.2" rel="nofollow" title="v0.3.2">v0.3.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.3.1/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.3.1" rel="nofollow" title="v0.3.1">v0.3.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.3.0/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.3.0" rel="nofollow" title="v0.3.0">v0.3.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.2.1/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.1" rel="nofollow" title="v0.2.1">v0.2.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.2.0/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.0" rel="nofollow" title="v0.2.0">v0.2.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.1.2/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.1.2" rel="nofollow" title="v0.1.2">v0.1.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.1.1/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.1.1" rel="nofollow" title="v0.1.1">v0.1.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.1.0/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.1.0" rel="nofollow" title="v0.1.0">v0.1.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.0.4/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.0.4" rel="nofollow" title="v0.0.4">v0.0.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.0.2/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.0.2" rel="nofollow" title="v0.0.2">v0.0.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.0.1/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.0.1" rel="nofollow" title="v0.0.1">v0.0.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.0.0-dirty/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.0.0-dirty" rel="nofollow" title="v0.0.0-dirty">v0.0.0-dirty</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/sockjs/sockjs-client/blob/v0.0.0/lib/sockjs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.0.0" rel="nofollow" title="v0.0.0">v0.0.0</a>
              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/sockjs/sockjs-client" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/sockjs/sockjs-client/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/sockjs/sockjs-client/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">5</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:0941b2ed14ae893853bd5e098b721154 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:0941b2ed14ae893853bd5e098b721154 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sockjs/sockjs-client" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">sockjs-client</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sockjs/sockjs-client/tree/master/lib" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">lib</span></a></span> / <strong class="final-path">sockjs.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="lib/sockjs.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/sockjs/sockjs-client/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/c4fd42a92a1ce986f41e77015f42cbb1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/squaremo" rel="author">squaremo</a></span>
    <time class="js-relative-date" datetime="2012-11-29T08:42:08-08:00" title="2012-11-29 08:42:08">November 29, 2012</time>
    <div class="commit-title">
        <a href="/sockjs/sockjs-client/commit/ec1632f96675a59fab6d4d3beb2d4594eb5152e8" class="message">Make the condition on `this` more accurate. In principle it might run…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="majek" href="/sockjs/sockjs-client/commits/master/lib/sockjs.js?author=majek"><img height="20" src="https://secure.gravatar.com/avatar/d4e1d473a995ef37b3e03e9e6006c3e3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="substack" href="/sockjs/sockjs-client/commits/master/lib/sockjs.js?author=substack"><img height="20" src="https://secure.gravatar.com/avatar/d4a2f12ceae3b7f211b661576d22bfb9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="squaremo" href="/sockjs/sockjs-client/commits/master/lib/sockjs.js?author=squaremo"><img height="20" src="https://secure.gravatar.com/avatar/c4fd42a92a1ce986f41e77015f42cbb1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d4e1d473a995ef37b3e03e9e6006c3e3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/majek">majek</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d4a2f12ceae3b7f211b661576d22bfb9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/substack">substack</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c4fd42a92a1ce986f41e77015f42cbb1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/squaremo">squaremo</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/sockjs/sockjs-client/blob/3f7e5f4ef5673dc15d3d3db890bc82a725f0c91d/lib/sockjs.js" data-title="sockjs-client/lib/sockjs.js at master · sockjs/sockjs-client · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>262 lines (240 sloc)</span>
                <span>8.606 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/sockjs/sockjs-client/edit/master/lib/sockjs.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/sockjs/sockjs-client/raw/master/lib/sockjs.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/sockjs/sockjs-client/blame/master/lib/sockjs.js" class="button minibutton ">Blame</a>
                  <a href="/sockjs/sockjs-client/commits/master/lib/sockjs.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * ***** BEGIN LICENSE BLOCK *****</span></div><div class='line' id='LC3'><span class="cm"> * Copyright (c) 2011-2012 VMware, Inc.</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * For the license see COPYING.</span></div><div class='line' id='LC6'><span class="cm"> * ***** END LICENSE BLOCK *****</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="kd">var</span> <span class="nx">SockJS</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">dep_protocols_whitelist</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">SockJS</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// makes `new` optional</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">SockJS</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">dep_protocols_whitelist</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">protocols_whitelist</span><span class="p">;</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_options</span> <span class="o">=</span> <span class="p">{</span><span class="nx">devel</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">debug</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">protocols_whitelist</span><span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">info</span><span class="o">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="nx">rtt</span><span class="o">:</span> <span class="kc">undefined</span><span class="p">};</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">utils</span><span class="p">.</span><span class="nx">objectExtend</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_base_url</span> <span class="o">=</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">amendUrl</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_server</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">server</span> <span class="o">||</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">random_number_string</span><span class="p">(</span><span class="mi">1000</span><span class="p">);</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">protocols_whitelist</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">protocols_whitelist</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">protocols_whitelist</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">protocols_whitelist</span><span class="p">;</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deprecated API</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">dep_protocols_whitelist</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_protocols_whitelist</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">protocols_whitelist</span> <span class="o">=</span> <span class="p">[</span><span class="nx">dep_protocols_whitelist</span><span class="p">];</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">utils</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">dep_protocols_whitelist</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">protocols_whitelist</span> <span class="o">=</span> <span class="nx">dep_protocols_whitelist</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">protocols_whitelist</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">protocols_whitelist</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s1">&#39;Deprecated API: Use &quot;protocols_whitelist&quot; option &#39;</span> <span class="o">+</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;instead of supplying protocol list as a second &#39;</span> <span class="o">+</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;parameter to SockJS constructor.&#39;</span><span class="p">);</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_protocols</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">=</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span><span class="p">;</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_ir</span> <span class="o">=</span> <span class="nx">createInfoReceiver</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_base_url</span><span class="p">);</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_ir</span><span class="p">.</span><span class="nx">onfinish</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">info</span><span class="p">,</span> <span class="nx">rtt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_ir</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">info</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">info</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Override if user supplies the option</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">info</span> <span class="o">=</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">objectExtend</span><span class="p">(</span><span class="nx">info</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">info</span><span class="p">);</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">rtt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtt</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">rtt</span><span class="p">;</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_applyInfo</span><span class="p">(</span><span class="nx">info</span><span class="p">,</span> <span class="nx">rtt</span><span class="p">,</span> <span class="nx">protocols_whitelist</span><span class="p">);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_didClose</span><span class="p">();</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_didClose</span><span class="p">(</span><span class="mi">1002</span><span class="p">,</span> <span class="s1">&#39;Can\&#39;t connect to server&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC62'><span class="p">};</span></div><div class='line' id='LC63'><span class="c1">// Inheritance</span></div><div class='line' id='LC64'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">REventTarget</span><span class="p">();</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="s2">&quot;&lt;!-- version --&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC69'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">OPEN</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC70'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">CLOSING</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC71'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">CLOSED</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_debug</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">debug</span><span class="p">)</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">utils</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">utils</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC76'><span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_dispatchOpen</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_transport_tref</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_transport_tref</span><span class="p">);</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_transport_tref</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">=</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">OPEN</span><span class="p">;</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="k">new</span> <span class="nx">SimpleEvent</span><span class="p">(</span><span class="s2">&quot;open&quot;</span><span class="p">));</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The server might have been restarted, and lost track of our</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// connection.</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_didClose</span><span class="p">(</span><span class="mi">1006</span><span class="p">,</span> <span class="s2">&quot;Server lost session&quot;</span><span class="p">);</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC92'><span class="p">};</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_dispatchMessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">OPEN</span><span class="p">)</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="k">new</span> <span class="nx">SimpleEvent</span><span class="p">(</span><span class="s2">&quot;message&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">}));</span></div><div class='line' id='LC99'><span class="p">};</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_dispatchHeartbeat</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">OPEN</span><span class="p">)</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="k">new</span> <span class="nx">SimpleEvent</span><span class="p">(</span><span class="s1">&#39;heartbeat&#39;</span><span class="p">,</span> <span class="p">{}));</span></div><div class='line' id='LC106'><span class="p">};</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_didClose</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">code</span><span class="p">,</span> <span class="nx">reason</span><span class="p">,</span> <span class="nx">force</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">OPEN</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CLOSING</span><span class="p">)</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;INVALID_STATE_ERR&#39;</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_ir</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_ir</span><span class="p">.</span><span class="nx">nuke</span><span class="p">();</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_ir</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_transport</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_transport</span><span class="p">.</span><span class="nx">doCleanup</span><span class="p">();</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_transport</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">close_event</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">SimpleEvent</span><span class="p">(</span><span class="s2">&quot;close&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">code</span><span class="o">:</span> <span class="nx">code</span><span class="p">,</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reason</span><span class="o">:</span> <span class="nx">reason</span><span class="p">,</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wasClean</span><span class="o">:</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">userSetCode</span><span class="p">(</span><span class="nx">code</span><span class="p">)});</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">utils</span><span class="p">.</span><span class="nx">userSetCode</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">force</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_try_next_protocol</span><span class="p">(</span><span class="nx">close_event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">close_event</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">SimpleEvent</span><span class="p">(</span><span class="s2">&quot;close&quot;</span><span class="p">,</span> <span class="p">{</span><span class="nx">code</span><span class="o">:</span> <span class="mi">2000</span><span class="p">,</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reason</span><span class="o">:</span> <span class="s2">&quot;All transports failed&quot;</span><span class="p">,</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wasClean</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">last_event</span><span class="o">:</span> <span class="nx">close_event</span><span class="p">});</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">=</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CLOSED</span><span class="p">;</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">utils</span><span class="p">.</span><span class="nx">delay</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">close_event</span><span class="p">);</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC144'><span class="p">};</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_didMessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;o&#39;</span><span class="o">:</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_dispatchOpen</span><span class="p">();</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;a&#39;</span><span class="o">:</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">payload</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;[]&#39;</span><span class="p">);</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">payload</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_dispatchMessage</span><span class="p">(</span><span class="nx">payload</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;m&#39;</span><span class="o">:</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">payload</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;null&#39;</span><span class="p">);</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_dispatchMessage</span><span class="p">(</span><span class="nx">payload</span><span class="p">);</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;c&#39;</span><span class="o">:</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">payload</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;[]&#39;</span><span class="p">);</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_didClose</span><span class="p">(</span><span class="nx">payload</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">payload</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;h&#39;</span><span class="o">:</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_dispatchHeartbeat</span><span class="p">();</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC171'><span class="p">};</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_try_next_protocol</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">close_event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">protocol</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s1">&#39;Closed transport:&#39;</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">protocol</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="o">+</span><span class="nx">close_event</span><span class="p">);</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_transport_tref</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_transport_tref</span><span class="p">);</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_transport_tref</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">protocol</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_protocols</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">protocol</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Some protocols require access to `body`, what if were in</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the `head`?</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">SockJS</span><span class="p">[</span><span class="nx">protocol</span><span class="p">]</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">SockJS</span><span class="p">[</span><span class="nx">protocol</span><span class="p">].</span><span class="nx">need_body</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="o">!</span><span class="nx">_document</span><span class="p">.</span><span class="nx">body</span> <span class="o">||</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">typeof</span> <span class="nx">_document</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="nx">_document</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="s1">&#39;complete&#39;</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_protocols</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="nx">protocol</span><span class="p">);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">=</span> <span class="s1">&#39;waiting-for-load&#39;</span><span class="p">;</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">utils</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_try_next_protocol</span><span class="p">();</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">SockJS</span><span class="p">[</span><span class="nx">protocol</span><span class="p">]</span> <span class="o">||</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="nx">SockJS</span><span class="p">[</span><span class="nx">protocol</span><span class="p">].</span><span class="nx">enabled</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s1">&#39;Skipping transport:&#39;</span><span class="p">,</span> <span class="nx">protocol</span><span class="p">);</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">roundTrips</span> <span class="o">=</span> <span class="nx">SockJS</span><span class="p">[</span><span class="nx">protocol</span><span class="p">].</span><span class="nx">roundTrips</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">to</span> <span class="o">=</span> <span class="p">((</span><span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">rto</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span> <span class="o">*</span> <span class="nx">roundTrips</span><span class="p">)</span> <span class="o">||</span> <span class="mi">5000</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_transport_tref</span> <span class="o">=</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">delay</span><span class="p">(</span><span class="nx">to</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// I can&#39;t understand how it is possible to run</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// this timer, when the state is CLOSED, but</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// apparently in IE everythin is possible.</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_didClose</span><span class="p">(</span><span class="mi">2007</span><span class="p">,</span> <span class="s2">&quot;Transport timeouted&quot;</span><span class="p">);</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">connid</span> <span class="o">=</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">random_string</span><span class="p">(</span><span class="mi">8</span><span class="p">);</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">trans_url</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_base_url</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_server</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="nx">connid</span><span class="p">;</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_debug</span><span class="p">(</span><span class="s1">&#39;Opening transport:&#39;</span><span class="p">,</span> <span class="nx">protocol</span><span class="p">,</span> <span class="s1">&#39; url:&#39;</span><span class="o">+</span><span class="nx">trans_url</span><span class="p">,</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39; RTO:&#39;</span><span class="o">+</span><span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">rto</span><span class="p">);</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_transport</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">SockJS</span><span class="p">[</span><span class="nx">protocol</span><span class="p">](</span><span class="nx">that</span><span class="p">,</span> <span class="nx">trans_url</span><span class="p">,</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_base_url</span><span class="p">);</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC228'><span class="p">};</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">close</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">code</span><span class="p">,</span> <span class="nx">reason</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">code</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">utils</span><span class="p">.</span><span class="nx">userSetCode</span><span class="p">(</span><span class="nx">code</span><span class="p">))</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;INVALID_ACCESS_ERR&quot;</span><span class="p">);</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">OPEN</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">=</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CLOSING</span><span class="p">;</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_didClose</span><span class="p">(</span><span class="nx">code</span> <span class="o">||</span> <span class="mi">1000</span><span class="p">,</span> <span class="nx">reason</span> <span class="o">||</span> <span class="s2">&quot;Normal closure&quot;</span><span class="p">);</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC241'><span class="p">};</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">CONNECTING</span><span class="p">)</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;INVALID_STATE_ERR&#39;</span><span class="p">);</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="nx">SockJS</span><span class="p">.</span><span class="nx">OPEN</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_transport</span><span class="p">.</span><span class="nx">doSend</span><span class="p">(</span><span class="nx">utils</span><span class="p">.</span><span class="nx">quote</span><span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC251'><span class="p">};</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'><span class="nx">SockJS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_applyInfo</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">info</span><span class="p">,</span> <span class="nx">rtt</span><span class="p">,</span> <span class="nx">protocols_whitelist</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">info</span> <span class="o">=</span> <span class="nx">info</span><span class="p">;</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">rtt</span> <span class="o">=</span> <span class="nx">rtt</span><span class="p">;</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">rto</span> <span class="o">=</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">countRTO</span><span class="p">(</span><span class="nx">rtt</span><span class="p">);</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_options</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">null_origin</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_document</span><span class="p">.</span><span class="nx">domain</span><span class="p">;</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">probed</span> <span class="o">=</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">probeProtocols</span><span class="p">();</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">_protocols</span> <span class="o">=</span> <span class="nx">utils</span><span class="p">.</span><span class="nx">detectProtocols</span><span class="p">(</span><span class="nx">probed</span><span class="p">,</span> <span class="nx">protocols_whitelist</span><span class="p">,</span> <span class="nx">info</span><span class="p">);</span></div><div class='line' id='LC261'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1359500886" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06784s from fe19.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/sockjs/sockjs-client/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06839' data-host='fe19'></span>
    
  </body>
</html>

