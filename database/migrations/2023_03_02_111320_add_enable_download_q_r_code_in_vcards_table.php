<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vcards', function (Blueprint $table) {
            $table->boolean('enable_download_qr_code')->after('tenant_id')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vcards', function (Blueprint $table) {
            $table->dropColumn('enable_download_qr_code');
        });
    }
};
