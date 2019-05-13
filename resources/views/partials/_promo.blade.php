<div id="promo">
    <div class="promo_items">
        @foreach ($promo_content as $item)
            <div class="promo_item">
                <h3 class="item_header">{{ $item['header'] }}</h3>
                <span class="item_content">{{ $item['content'] }}</span>
            </div>
        @endforeach
    </div>
</div>