<section id="advantages">
    <div class="advantages_wrapper">
        <h1 class="advantages_header">Приемущества работы с нами</h1>
        <div class="advantages_items">
            @foreach ($adv_content as $item)
                <div class="advantages_item">
                    <img src="{{ $item['img_url'] }}" class="adv_icon">
                    <h2 class="adv_item_header">{{ $item['header'] }}</h2>
                    <span class="adv_item_content">{{ $item['content'] }}</span>
                </div>
            @endforeach
        </div>
    </div>
</section>