<section id="form_section">
    <div class="form_wrapper">
        <label for="contact_form">Теперь расскажите о себе</label>
        <form id="contact_form" action="{{ route('submit-contact-form') }}" method="GET"> 
            <input type="hidden" id="_token" value="{{ csrf_token() }}">
            @foreach ($form_inputs as $item)
                <div class="input_wrapper item">
                    <div class="number_icon">{{ $item['number'] }}</div>
                    <div class="animated_placeholder anim_back_input {{ $item['class'] }}">{{ $item['placeholder'] }}</div>
                    <input id="input_{{ $item['number'] }}" class="form_input" name="{{ $item['name'] }}">
                </div>
            @endforeach
            <button id="submit_contact_form" type="submit" class="contact_form_submit_btn item">Отправить</button>
        </form>
    </div>
</section>