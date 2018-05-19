<template>
    <nav>
        <div class="nav">
            <div class="nav-ctrl">
                <div class="nav-ctrl-next">next</div>
                <div class="nav-ctrl-prev">prev</div>
            </div>
            <div class="nav-title">
                <h1>Title</h1>
            </div>
            <div class="nav-external">
                <div class="nav-external-link">
                    twitter
                </div>
                <div class="nav-external-link">
                    twitter
                </div>
                <div class="nav-external-link">
                    twitter
                </div>
            </div>
        </div>
        <div class="toggle">
            toggl
        </div>
    </nav>
</template>

<style scoped lang="scss">
    $brand: #3F51B5;
    $spacing: 15px;
    
    nav {
        background-color: #F0F0F0;
    }
    
    .nav {
        display: flex;
        max-width: 1200px + $spacing*2;
        margin: 0 auto;
        padding: $spacing;
        
        &-ctrl {
            display: flex;
            
            div {
                margin-right: $spacing;
            }
        }
        &-title {
            padding: 0 $spacing;
            border-left: 1px solid #000;
        }
        &-external {
            display: flex;
            margin-left: auto;
        }
    }
    
    .toggle {
        position: absolute;
        margin: 0 auto;
        top: $spacing; left: $spacing;
    }
</style>