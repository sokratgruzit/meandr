@if (Session::has('success'))
    <div class="success-message fade_out_message">
        <span class="success-strong"><strpmg>Success:</strong> {{ Session::get('success') }}</span>
    </div>
    {{ Session::forget('success') }}
@endif

@if (Session::has('error'))
    <div class="error-message fade_out_message">
        <span class="error-strong"><strong>Error:</strong> {{ Session::get('error') }}</span>
    </div>
    {{ Session::forget('error') }}
@endif